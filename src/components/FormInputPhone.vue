<template>
    <div class="register__item register__item_input">
        <input 
        type="text" 
        class="register__input" 
        name="phone" 
        :class="isValid"
        v-model="value"
        @input="createMask"
        @focus="createMask"
        @blur="createMask"
        placeholder=" ">
        <label class="register__placeholder" :class="isValid">{{label}}</label>
        <div class="register__help" :class="isValid">*{{error}}</div>
    </div>
</template>

<script>
export default {
    name: 'FormInputPhone',
    props: {
        label: String,
        isValid: String,
        error:String
    },
    data() {
        return {
            value: '',
            t: false,
        }
    },
    methods: {
        setCursorPosition(pos, elem) {
            if(elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
                
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        },
        createMask(event) {
            let matrix = '7 (___) ___ __ __',
            i = 0,
            el = document.querySelector('[name="phone"]'), 
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
            
            if(def.length >= val.length) {
                val = def;
            }
            
            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if(event.type === 'focus') {
                this.t = false;
                const timeInterval = setInterval(() => {
                    this.setCursorPosition(this.value.length, el);
                    if(this.t)
                        clearInterval(timeInterval);
                }, 10);
            } 

            if(event.type === 'blur') {
                this.t = true;
                if(this.value.length == 1)
                    this.value = '';
            } else 
                this.setCursorPosition(this.value.length, el);

            this.$emit('getPhone', this.value);
        },
    }
}
</script>

<style lang="scss">

</style>
