# html form using react-hook-form (controller), yup and yup resolver with shared html controls and validations.
1. react-hook-form, yup and yup resolver third partly libraries are using to handle the form state.
2. These libraries provide rich set of features to handle the form events/values/states/validations etc.
3. The form has been created with shared input controls and third party library.
4. react-hook-form library is being used to handle the form values.
    > Install: npm install react-hook-form
5. yup library is being used to handle the form validations and model/schema.
    > Install: npm i yup
6. yup resolver is being used to handle yup with react-hook-form library. It acts as a middleware.
    > npm i @hookform/resolvers
7. Why we should we go with [use form hook Controller] instead of [register]
    > ### `register`: We can use register when we work with simple html controls example: input box etc. It won't work with multi select control and many other advanced controls when we work with third party html controls. It creates problem when we work with third party tools for making controls example: Material UI.
    > use form hook Controller: It's very easy to use all the third party controls with [use form hook Controller].
7. Shared HTML conrtols:
    > components/controls/CheckBox.tsx, components/controls/DropDownList.tsx, components/controls/Input.tsx, components/controls/RadioGroup.tsx
8. Employee Page:
    > components/pages/Eomployee.tsx
# Please refer the attached information.txt and APP-DEMO file for more information.
