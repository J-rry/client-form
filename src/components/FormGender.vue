<template>
<div class="register__item  register__item_radio">
    <h3 class="register__title">{{title}}:</h3>
    <div class="register__radio">
        <label>
            <input 
            type="radio" 
            class="form__radio"  
            name="gender" 
            value="male"
            @change="changeRadio"            
            v-model="gender">
            <span class="form__radio-button">Мужской</span>
        </label>
    </div>
    <div class="register__radio">
        <label>
            <input 
            type="radio" 
            class="form__radio" 
            name="gender"
            value="female"
            @change="changeRadio" 
            v-model="gender"> 
            <span class="form__radio-button">Женский</span>
        </label>
    </div>                          
</div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        title: String,
    },
    data() {
        return {
            gender: 'male' 
        }
    },
    methods: {
        changeRadio() {
            this.$emit('getRadio', this.gender);
        }
    },
}
</script>

<style lang="scss">
.register {
    
    &__radio {
        margin-left: 33px;
        margin-top: 12px;
        text-align: left;
    }
}
.form {
    &__radio {
        appearance: none;
        position: absolute;

        &:checked + .form__radio-button{
            color: rgb(46, 135, 219);
        }
        &:checked + .form__radio-button::before{
            box-shadow: inset 0 0 0 0.3rem rgb(46, 135, 219);
            border-color: rgb(46, 135, 219);
        }
    }

    &__radio-button {
        font-size: 1.2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: 0.4s color;
        gap: 7px;
        &::before {
            content: '';    
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #2c3e50;
            transition: 0.4s box-shadow, 0.4s border-color;
            box-shadow: inset 0 0 0 0.01rem #2c3e50;
        }
    }
}
</style>
