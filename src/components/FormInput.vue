<template>
    <div class="register__item register__item_input">
        <input 
        type="text" 
        class="register__input" 
        maxlength="40"
        :class="isValid"
        v-model="text"
        @input="changeInput" 
        placeholder=" "
        >
        <label class="register__placeholder" :class="isValid">{{label}}</label>
        <div class="register__help" :class="isValid">*{{error}}</div>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        label: String,
        isValid: String,
        error: String,
        inputType: String,
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        changeInput() {

            if(this.inputType === 'text')
                this.text = this.text.replace(/[^a-zа-яё]/gi, '');
            
            if(this.inputType === 'number')
                this.text = this.text.replace(/[^0-9]/g, '');

            this.$emit('getInput', this.text);
        }
    },
}
</script>

<style lang="scss">

</style>
