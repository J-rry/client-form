<template>
    <div class="register__item  register__item_select">
        <h3 class="register__title">{{title}}:</h3>
        <select class="register__select" 
        v-model="selected"
        :class="isValid"
        @change="selectedArray">
            
            <option 
            v-for="(opt, id) in options" 
            :key="id" 
            :value="opt.value"
            >{{opt.label}}</option>
        </select>
        <div class="register__help" :class="isValid">*Поле обязательно для заполнения</div>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        title: String,
        options: Array,
        isValid: String,
    },
    data() {
        return {
            selected: String,
        }
    },
    methods: {
        selectedArray() {
            this.$emit('getSelected', this.selected);
        }
    },
}
</script>

<style lang="scss">

</style>
