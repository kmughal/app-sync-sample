# Introduction

This is sample helloworld code for Appsync.


After creating the user you might have to reset the password us the following command:


```sh 

aws cognito-idp admin-set-user-password --user-pool-id "user-pool-id"  --username "test" --password "Abc1234$" --permanent


```