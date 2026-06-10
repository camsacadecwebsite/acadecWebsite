import pandas as pd 
from sklearn.tree import DecisionTreeRegressor 
from sklearn.ensemble import RandomForestRegressor 
from sklearn.ensemble import RandomForestClassifier 
from sklearn.impute import SimpleImputer 
from sklearn.metrics import mean_absolute_error 
from sklearn.preprocessing import OrdinalEncoder 
from sklearn.preprocessing import OneHotEncoder 
from sklearn.compose import ColumnTransformer 
from sklearn.pipeline import Pipeline 
from sklearn.pipeline import make_pipeline 
from sklearn.model_selection import cross_val_score 
from sklearn.model_selection import train_test_split 
from xgboost import XGBRegressor 

# Predicting regional and state objective scores based off of: 
# 1. Demidec practice tests 
# 2. USAD practice tests (easy, medium, hard) 
# 3. Projections 
# 4. Initial Scrimmage Scores 
# 5. Number of confident questions 
# 6. Number of probably right questions 
# 7. Number of coin flip questions 
# 8. Number of guessed questions 
# 9. Formula based Projection (0.75, 0.5, 0.2) 

practiceData = pd.DataFrame({ 
    'Subject': ['Art', 'Econ', 'Lit', 'Math', 'Music', 'Sci', 'Socsci'], 
    'Demidec1': [600, 680, None, None, 840, 880, 800], 
    'Demidec2': [720, 860, None, None, 880, 800, 700], 
    'Demidec3': [740, 680, None, None, None, None, 760], 
    'Demidec4': [900, 680, None, None, 900, 860, 900], 
    'Demidec5': [820, 660, None, None, None, None, 900], 
    'USAD1': [840, 960, None, None, 900, None, 900], 
    'USAD2': [860, 880, None, None, 700, None, 900], 
    'USAD3': [860, 720, None, None, 700, None, 940], 
    'AveragePractice': [800, 760, None, None, 800, 840, 840], 
    'PracticeProjection': [840, 780, None, None, 860, 840, 860], 
    'Scrimmage': [800, 660, 780, 743, 840, 840, 660], 
    'Confident': [33, 37, 31, 34, 32, 35, 36], 
    '75': [0, 5, 4, 4, 8, 1, 3], 
    '50': [0, 5, 7, 4, 7, 10, 3], 
    '20': [17, 3, 8, 8, 3, 4, 7], 
    'FormulaProjection': [820, 760, 780, 657, 840, 820, 820], 
    'Score': [880, 740, 780, 771, 840, 820, 820], 
}) 

print(practiceData) # Print the actual data
print(practiceData[['AveragePractice', 'PracticeProjection', 'FormulaProjection', 'Score']].describe()) # Print the description of certain rows

# Makes copy of dataset + sets up training and testing data
withoutScore = practiceData.drop(['Score'], axis=1) # Copy of dataset, removes Score so that the model can't see it
X = withoutScore.select_dtypes(exclude='object') # Only predicts based off of numerical rows (which are all of them, so it doesn't matter) 
y = practiceData.Score 
X_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, test_size=0.2, random_state=0) # Split into training (80%) and validation (20%) 

# RANDOM FOREST MODEL (For missing scores, indicate in another column that the data was missing + imput mean of numbers)

def meanAbsoluteErrorScore(X_train, X_valid, y_train, y_valid): # Scoring the dataset based off Mean Absolute Score 
    model = RandomForestRegressor(n_estimators=10, random_state=0) # Model is Random Forest Regressor 
    model.fit(X_train, y_train) # Fit model 
    prediction = model.predict(X_valid) # Predict model 
    return mean_absolute_error(y_valid, prediction) # Return Mean Absolute Error 

def predictionScore(X_train, X_valid, y_train, y_valid): # Predicting actual scores 
    model = RandomForestRegressor(n_estimators=10, random_state=0) # Model is Random Forest Regressor 
    model.fit(X_train, y_train) # Fit model 
    return model.predict(X_valid) # Predict model 

# Account for missing scores
missingColumnns = [col for col in X_train.columns if X_train[col].isnull().any()] # Finding all missing columns 

# Make copies 
XTrainPlus = X_train.copy() 
XValidPlus = X_valid.copy() 

for col in missingColumnns: # Add columns indication what will be inputted 
    XTrainPlus[col + '_was_missing'] = XTrainPlus[col].isnull() 
    XValidPlus[col + '_was_missing'] = XValidPlus[col].isnull() 

# Inputs the mean of already existing numbers and put it into columns that don't have anything
inputer = SimpleImputer() # Uses SimpleImputer, calculates mean of existing numbers 
imputedXTrainPlus = pd.DataFrame(inputer.fit_transform(XTrainPlus), columns=XTrainPlus.columns) # Inputs the new data 
imputedXValidPlus = pd.DataFrame(inputer.transform(XValidPlus), columns=XValidPlus.columns) # Inputs the new data 

# Prepare full dataset so model can read it 
X_plus = X.copy() 
for col in missingColumnns: 
    X_plus[col + '_was_missing'] = X_plus[col].isnull() 
inputedXFull = pd.DataFrame(inputer.transform(X_plus), columns=X_plus.columns) 

# Train the model on the training data split 
forestRegressionModel = RandomForestRegressor(n_estimators=10, random_state=0) 
forestRegressionModel.fit(imputedXTrainPlus, y_train) 

# Predict scores
simplePredictions = forestRegressionModel.predict(inputedXFull) 

# Final Results
results = pd.DataFrame({  # Make new dataframe based on final results
    'Subject': practiceData['Subject'], 
    'Actual Score': y, 
    'Predicted Score': simplePredictions 
}) 
print(f"\nPredictions for Subjects") 
print(results.to_string(index=False)) 
print("MAE from Forest Regression Model:", meanAbsoluteErrorScore(imputedXTrainPlus, imputedXValidPlus, y_train, y_valid)) 


# XGB MODEL 
xgbModel = XGBRegressor(n_estimators=500, learning_rate=0.05, n_jobs=4, early_stopping_rounds=5) # Note: N_estimators specifies how many times to go through modeling, too low = underfitting, too high = overfitting 

xgbModel.fit(X_train, y_train, eval_set=[(X_valid, y_valid)], verbose=False) # After 5 rounds of lower validation scores, stop

predictionXGBoost = xgbModel.predict(X)
validationPredictionsXGBoost = xgbModel.predict(X_valid) # Predict scores

# Final results
xgbResults = pd.DataFrame({ # Create anothe dataframe
    'Subject': practiceData['Subject'], 
    'Actual Score': y, 
    'Predicted Score': predictionXGBoost 
}) 
print(f"\nPredictions for Subjects") 
print(xgbResults.to_string(index=False)) 
print("MAE from XGBoost Model:", mean_absolute_error(y_valid, validationPredictionsXGBoost))
