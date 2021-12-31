<template>
  <div id="app">
    <div class="container">
      <h1 class="h1-title">Заполните форму:</h1>
      <form 
      name="formRegistration" 
      action="#" 
      method="post" 
      enctype="multipart/form-data" 
      class="form__registration" 
      @submit.prevent="checkForm">
        <FormInput 
          :isValid="v$.form.firstName.$error ? 'invalid' : ''" 
          :error="firstNameMessage"
          label="Имя*:"
          :inputType="'text'"
          @getInput="addFirstName"/>
        <FormInput 
          :isValid="v$.form.lastName.$error ? 'invalid' : ''" 
          :error="lastNameMessage"
          label="Фамилия*:"
          :inputType="'text'"
          @getInput="addLastName"/>
        <FormInput 
          label="Отчество:"
          :inputType="'text'"
          @getInput="addSecondName"/>
        <FormDate 
          title="Дата рождения"
          @getDate="addBirthDay"/>
        <FormInputPhone 
          :isValid="v$.form.phone.$error ? 'invalid' : ''" 
          :error="phoneMessage"
          label="Номер телефона:"
          @getPhone="addPhone"/>
        <FormGender 
          title="Пол"
          @getRadio="addGender"/>
        <FormMultiSelect 
          title="Группа клиентов"
          :isValid="v$.form.clientGroups.$error ? 'invalid' : ''"
          :options="this.clientGroup"
          @getFavorites="addClientGroup"/>
        <FormSelect 
          title="Лечащий врач" 
          item_name="doctor" 
          :options="this.doctors"
          @getSelected="addDoctor"/>
        <FormCheckbox 
          title="Согласие на отправку СМС"
          label="Не отправлять СМС"
          @getCheckbox="addNoSMS"/>
          <h2 class="h2-title">Адрес:</h2>
          <FormInput 
            label="Индекс:"
            @getInput="addIndex"/>
          <FormInput 
            label="Страна:"
            :inputType="'text'"
            @getInput="addCountry"/>
          <FormInput 
            label="Область:"
            :inputType="'text'"
            @getInput="addRegion"/>
          <FormInput 
            :isValid="v$.form.adds.city.$error ? 'invalid' : ''" 
            :error="cityMessage"
            :inputType="'text'"
            label="Город*:"
            @getInput="addCity"/>
          <FormInput 
            label="Улица:"
            :inputType="'text'"
            @getInput="addStreet"/>
          <FormInput 
            label="Дом:"
            @getInput="addHause"/>
          <h2 class="h2-title">Паспорт:</h2>
          <FormSelect 
            title="Тип документа*" 
            :isValid="v$.form.passport.document.$error ? 'invalid' : ''" 
            :options="this.documents"
            @getSelected="addDocument"/>
          <FormInput 
            label="Серия:"
            :inputType="'number'"
            @getInput="addSeries"/>
          <FormInput 
            label="Номер:"
            :inputType="'number'"
            @getInput="addNumber"/>
          <FormInput 
            label="Кем выдан:"
            @getInput="addIssuedBy"/>
          <FormDate 
              title="Дата выдачи документа"
              @getDate="addIssuedDate"/>
        <div class="register__item register__item_button">
            <p 
            v-if="v$.form.$error && v$.form.$invalid"
            class="register__validate-message register__validate-message_invalid"
            >Проверьте правильность заполнения формы</p>   
            <p 
            v-else-if="!v$.form.$error && !v$.form.$invalid && isFormValid"
            class="register__validate-message register__validate-message_valid"
            >Пользователь успешно создан</p>
            <p 
            v-else
            class="register__validate-message register__validate-message_none"
            >-</p> 
            <button class="register__submit" type="submit">Отправить</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import FormInput from './components/FormInput.vue'
import FormDate from './components/FormDate.vue'
import FormInputPhone from './components/FormInputPhone.vue'
import FormGender from './components/FormGender.vue'
import FormMultiSelect from './components/FormMultiSelect.vue'
import FormSelect from './components/FormSelect.vue'
import FormCheckbox from './components/FormCheckbox.vue'

import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'App',
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    FormInput,
    FormDate,
    FormInputPhone,
    FormGender,
    FormMultiSelect,
    FormSelect,
    FormCheckbox,
  },
  data() {
    return {
      errorMessage1: 'Поле обязательно для заполнения',
      errorMessage2: 'Минимальное количество символов: 2',
      isFormValid: false,
      doctors: [
        {
          label: 'Иванов',
          value: 'Ivanov'
        },
        {
          label: 'Захаров',
          value: 'Zaharov'
        },
        {
          label: 'Чернышева',
          value: 'Chebisheva'
        },
      ],
      documents: [
        {
          label: 'Паспорт',
          value: 'Passport'
        },
        {
          label: 'Свидетельство о рождении',
          value: 'Birth certificate'
        },
        {
          label: 'Вод. удостоверение',
          value: 'Driver license'
        },
      ],
      clientGroup: [
        {
          label: 'VIP',
          value: 'VIP'
        },
        {
          label: 'Проблемные',
          value: 'problem'
        },
        {
          label: 'ОМС',
          value: 'CHI'
        },
      ],
      form: {
        firstName: '',
        lastName: '',
        secondName: '', 
        birthDate: {
          year: 1900,
          month: 1,
          day: 1
        },    
        phone: '',
        gender: 'male',   
        clientGroups: [], 
        doctor: '',       
        noSMS: false,     
        adds: {
          index: '',
          country: '',
          region: '',
          city: '',
          street: '',
          hauseNumber: ''

        },
        passport: {
          document: '',
          series: '',
          number: '',
          issuedBy: '',
          dateOfIssue: {
            year: 1900,
            month: 1,
            day: 1
          }
        }        
      },
    }
  },
  methods: {
      addFirstName(getInput) {
        this.form.firstName = getInput;
      },
      addLastName(getInput) {
        this.form.lastName = getInput;
      },
      addSecondName(getInput) {
        this.form.secondName = getInput;
      },
      addBirthDay(getDate) {
        this.form.birthDate = getDate;
      },
      addPhone(getPhone) {
        this.form.phone = getPhone.replace(/[()\s]/g, '');
      },
      addGender(getRadio) {
        this.form.gender = getRadio;
      },
      addClientGroup(getFavorites) {
        this.form.clientGroups = getFavorites;
      },
      addDoctor(getSelected) {
        this.form.doctor = getSelected;
      },
      addNoSMS(getCheckbox) {
        this.form.noSMS = getCheckbox;
      },

      //Адресс
      addIndex(getInput) {
        this.form.adds.index = getInput;
      },
      addCountry(getInput) {
        this.form.adds.country = getInput;
      },
      addRegion(getInput) {
        this.form.adds.region = getInput;
      },
      addCity(getInput) {
        this.form.adds.city = getInput;
      },
      addStreet(getInput) {
        this.form.adds.street = getInput;
      },
      addHause(getInput) {
        this.form.adds.hauseNumber = getInput;
      },
      
      //Паспорт
      addDocument(getSelected) {
        this.form.passport.document = getSelected;
      },
      addSeries(getInput) {
        this.form.passport.series = getInput;
      },
      addNumber(getInput) {
        this.form.passport.number = getInput;
      },
      addIssuedBy(getInput) {
        this.form.passport.issuedBy = getInput;
      },
      addIssuedDate(getDate) {
        this.form.passport.dateOfIssue = getDate;
      },
      
      checkForm() {
        this.v$.form.$touch()
        if(!this.v$.form.$error) {
          this.isFormValid = true;
        }
      }
      
  },
  validations() {
    return {
      form: {
        firstName: { required, minLength: minLength(2) },
        lastName: { required, minLength: minLength(2) },    
        phone: { required, minLength: minLength(11) },  
        clientGroups: [{required}],     
        adds: {
          city: { required, minLength: minLength(2) },
        },   
        passport: {
          document: { required },
        },    
      },
    }
  },
  computed: {
    firstNameMessage() {
      return this.v$.form.firstName.$error && this.v$.form.firstName.required.$invalid ? this.errorMessage1 : this.v$.form.firstName.$error && this.v$.form.firstName.minLength.$invalid ? this.errorMessage2 : '';
    },
    lastNameMessage() {
      return this.v$.form.lastName.$error && this.v$.form.lastName.required.$invalid ? this.errorMessage1 : this.v$.form.lastName.$error && this.v$.form.lastName.minLength.$invalid ? this.errorMessage2 : '';
    },
    cityMessage() {
      return this.v$.form.adds.city.$error && this.v$.form.adds.city.required.$invalid ? this.errorMessage1 : this.v$.form.adds.city.$error && this.v$.form.adds.city.minLength.$invalid ? this.errorMessage2 : '';
    },
    phoneMessage() {
      return this.v$.form.phone.$error && this.v$.form.phone.required.$invalid ? this.errorMessage1 : this.v$.form.phone.$error && this.v$.form.phone.minLength.$invalid ? this.errorMessage2 : '';
    },
  }
}
</script>

<style lang="scss">
$main: #2c3e50;
h1,h2,h3,h4,h5,h6 {
    margin: 0;
}

body {
  background-color: #ecedf1;
}

#app {
  font-family: 'Nunito', sans-serif;
  color: $main;

}

.container {
  max-width: 900px;
  margin: 0 auto;
  margin-top: clamp(15px, 4.5vw, 50px);
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 50px 100px;
  @media (max-width: 700px) {
    padding: 30px 20px;
  }
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.h1-title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 500;
}
.h2-title {
  font-size: 1.7rem;
  margin-bottom: 10px;
  font-weight: 500;
}
.register {
  &__adds, &__pasport {
    margin-top: 20px;
    & .register__select {
      margin-bottom: 20px;
    }
  }
  &__pasport {
    & .h2-title {
      margin-bottom: 0;
    }
  } 

  &__item_button {
    margin-top: 40px;
    text-align: center;
  }

  &__validate-message {
    font-size: 1.3rem;

    &_valid {
      color: rgb(46, 135, 219);
    }
    &_invalid {
      color: rgb(219, 46, 60);
    }
    &_none {
      opacity: 0;
      visibility: hidden;
    }
  }

  &__submit {
    //border: 1px solid #000;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 15px 60px;
    color: #fff;
    background-color: rgb(46, 135, 219);
  }
}
//Date
.register {
    &__span {
        font-size: 1.25rem;
    }
    &__date {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    &__select {
        margin-top: 3px;
        font-size: 1.125rem;
        font-family: inherit;
        outline: none;
        padding: 2px;
        border-radius: 5px;
        background-color: #fff;
        border: 2px solid #2c3e50;
    }
}
.date__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    @media (max-width: 700px) {
        flex-wrap: wrap;
    }
}
//input
.register {
    
    &__item {
        position: relative;       
        margin-bottom: 10px; 

        &_input {
          padding-top: 20px;
        }
        &_radio {
          margin-bottom: 20px;
        }
        &_select {
          margin: 0;
        }
        &_checkbox {
          margin-bottom: 25px;
        }
        &_date {
        margin-bottom: 30px;
        }
    }

    &__title {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 1.4rem;
    }

    &__input {
        height: 2.8rem;
        width: 100%;
        font-size: 1.25rem;
        font-family: inherit;
        border-radius: 5px;
        border: 2px solid $main;
        box-sizing: border-box;
        padding-left: 15px;
        outline: none;
        transition: all 0.3s;
        &:focus, &:not(:placeholder-shown) {        
            border-color: rgb(46, 135, 219);
        }
        &:focus ~ .register__placeholder, &:not(:placeholder-shown) ~ .register__placeholder {
            top: -5px;
            font-size: 1.125rem;
            color: rgb(46, 135, 219);
            background-color: #fff;
        }
        &:not(:placeholder-shown) ~ .register__placeholder.invalid, &:placeholder-shown ~ .register__placeholder.invalid {
            color: rgb(219, 46, 60);
        }
        &.invalid {
            border-color: rgb(219, 46, 60);
        }
    }

    &__placeholder {
        position: absolute;
        font-size: 1.25rem;
        height: 1em;
        top: 29px;
        left: 10px;
        color: $main;
        pointer-events: none;
        padding: 1px 6px;
        transition: all 0.3s;   
    }

    &__help {
        margin-top: 5px;
        font-size: 0.875rem;
        color: rgb(219, 46, 60);
        opacity: 0;
        visibility: hidden;
        transition: 0.4s opacity;
        &.invalid {
            opacity: 1;
            visibility: visible;
        }
    }
}
//checkbox
.form {
    &__checkbox {
        display: none;
        &:checked + .form__checkbox-button::after{
            transform: scale(1);
        }
    }

    &__checkbox-button {
        margin-top: 10px;
        position: relative;
        padding-left: 27px;
        font-size: 1.2rem;
        &::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 0;
            width: 12px;
            height: 12px;
            border-radius: 25%;
            background-color: #fff;
            border: 3px solid rgb(43, 36, 36);
        }
        &::after {
            content: '';
            position: absolute;
            top: 7px;
            left: 5px;
            width: 8px;
            height: 8px;
            border-radius: 25%;
            background-color: rgb(46, 135, 219);
            transform: scale(0);
            transition: transform 0.4s;
        }

    }
}
//select
.register__select {
    font-size: 1.25rem;
    width: 100%;
    border-width: 2px;
    border-radius: 5px;
    height: 42px;
    outline: none;
    margin: 0;
    transition: border-color 0.4s;
    &:focus {
      border-color: rgb(46, 135, 219);
    }
    &.invalid {
      border-color: rgb(219, 46, 60);
    }
}
//multiselect
.register {

    &__multiselect {
        text-align: left;
        font-size: 1.15rem;
        box-sizing: border-box;
        font-family: inherit;
        outline: none;
        border-width: 2px;
        border-radius: 5px;
        padding-top: 5px;
        width: 100%;
        background-color: #fff;
        transition: 0.4s border-color;
        &.invalid {
          border-color: rgb(219, 46, 60);
          color: rgb(219, 46, 60);
        }
        &:focus {       
            border-color: rgb(46, 135, 219);
        }
        & option {
            padding-left: 5px;
        }
    }
}
</style>
