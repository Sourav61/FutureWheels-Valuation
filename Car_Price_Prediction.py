import numpy as np
import pandas as pd

df = pd.read_csv("car data.csv")

df

df.head()

df.tail()

df.shape

df.info()

df.describe(include='all')

df.columns

df.isnull().sum()

df['Fuel_Type'].unique()

df['Seller_Type'].unique()

df = df.drop('Car_Name', axis=1)

df.head()

df['current_year']=2021
df.head()

df['no_year']=df['current_year']-df['Year']

df.head()

df.drop('Year',axis=1,inplace=True)

final_df = pd.get_dummies(df,drop_first=True)

df.head()

final_df.head()

final_df.drop(['current_year'],axis=1,inplace=True)

final_df.corr()

import matplotlib.pyplot as plt
import seaborn as sns
corr = final_df.corr()
sns.heatmap(corr,annot=True)
plt.show()

x = final_df.iloc[:,1:]
y = final_df.iloc[:,0]

x.head()

y.head()

import sklearn
from sklearn.model_selection import train_test_split

xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size=0.25, random_state=9)

final_df.to_csv('test.csv')

from sklearn.ensemble import RandomForestRegressor

regressor = RandomForestRegressor()

regressor.fit(xtrain, ytrain)

from sklearn.ensemble import ExtraTreesRegressor

model = ExtraTreesRegressor()

model.fit(x, y)

print(model.feature_importances_)

feat_imp = pd.Series(model.feature_importances_, index=x.columns)

feat_imp.nlargest(5).plot(kind='barh')
plt.show()

from sklearn.linear_model import LinearRegression

re = LinearRegression()

re.fit(xtrain, ytrain)

pred = re.predict(xtest)
pred

from sklearn import metrics

print('MAE: ',metrics.mean_absolute_error(ytest,pred))

print('MSE: ',metrics.mean_squared_error(ytest,pred))

print('RMSE: ',np.sqrt(metrics.mean_absolute_error(ytest,pred)))

R2 = metrics.r2_score(ytest,pred)

print('R2: ',R2)

from sklearn.tree import DecisionTreeRegressor

tree = DecisionTreeRegressor()

tree.fit(xtrain, ytrain)

pred = tree.predict(xtest)
pred

from sklearn import metrics

print('MAE: ',metrics.mean_absolute_error(ytest,pred))

print('MSE: ',metrics.mean_squared_error(ytest,pred))

print('RMSE: ',np.sqrt(metrics.mean_absolute_error(ytest,pred)))

R2 = metrics.r2_score(ytest,pred)

print('R2: ',R2)

from sklearn.ensemble import RandomForestRegressor

regressor = RandomForestRegressor()

regressor.fit(xtrain, ytrain)

pred = regressor.predict(xtest)
pred

n_estimators = [int(x) for x in np.linspace(start = 100, stop =1200, num = 12)]
print(n_estimators)

from sklearn.model_selection import RandomizedSearchCV

n_estimators = [int(x) for x in np.linspace(start=100, stop=1200, num=12)]

max_features = ['auto','sqrt']

max_depth = [int(x) for x in np.linspace(5, 30, num=6)]

min_samples_split = [2, 5, 10, 15, 100]

min_samples_leaf = [1, 2, 5, 10]

random_grid = {'n_estimators': n_estimators,
               'max_features': max_features,
               'max_depth':max_depth,
               'min_samples_split':min_samples_split,
               'min_samples_leaf':min_samples_leaf}

print(random_grid)

regressor = RandomForestRegressor()

rf_random = RandomizedSearchCV(estimator = regressor, param_distributions=random_grid, scoring='neg_mean_squared_error', n_iter=100, cv = 5, verbose=2, random_state=42, n_jobs=1)

rf_random.fit(xtrain, ytrain)

rf_random.best_params_

rf_random.best_score_

pred = rf_random.predict(xtest)
print(pred)

from sklearn import metrics

print('MAE: ',metrics.mean_absolute_error(ytest,pred))

print('MSE: ',metrics.mean_squared_error(ytest,pred))

print('RMSE: ',np.sqrt(metrics.mean_absolute_error(ytest,pred)))

R2 = metrics.r2_score(ytest,pred)

print('R2: ',R2)

import pickle
file = open('car_price_model.pkl','wb')

pickle.dump(rf_random, file)

