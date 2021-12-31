<template>
    <div class="register__item register__item_checkbox">
        <h3 class="register__title">{{title}}:</h3>
        <label>
            <input 
            type="checkbox" 
            class="form__checkbox" 
            name="agreement" 
            v-model="noSMS" 
            @change="changeCheckbox" >

            <span  class="form__checkbox-button">{{label}}</span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        title: String,
        label: String
    },
    data() {
        return {
            noSMS: false
        }
    },
    methods: {
        changeCheckbox() {
            this.$emit('getCheckbox', this.noSMS);
        }
    },
}
</script>

<style lang="scss">

</style>
