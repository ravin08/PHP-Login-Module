> * prevent form submition during validation process
>
>  * trim user input value before check

---

## > username field validation
> * user name is unique in database
>  
> * user name is case incentive ravin == RAVIN == RaviN

1   user name is not empty

2   check user name with RegEX pattern

*   first 3 charecters must be alphabet letters
*   minimum length of user name must be 6 charecters
*   maximume length of user name is 20 charecters
*   space not allow

3   user name keep unique in database, check username availablity

---

## > email field validation

> * password field is unique in database
>
> * email is case incentive asd@example.com == Asd@Example.Com

1   - email field is not empty

2   - check valid email formate with RegEx pattern

3   - email keep unique in database, check email availablity

---

## > password field validation

1 - user name and password must not be same

2 - password minimum lenght must be 6 charecters

3 - password maximum lenght must not be grater than 20 chrecters

4 - check valid password formate with Regex

* space not allow
  
---

## > confirm password field validation

1 - match password with confirm password

---