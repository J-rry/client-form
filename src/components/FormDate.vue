<template>
    <div class="register__item register__item_date">
        <h3 class="register__title">{{title}}:</h3>
        <div class="register__date">
            <div class="date__item">
                <span class="register__span">Год:</span>
                <select 
                class="register__select" 
                name="year" 
                v-model="year"
                @change="changeDate">
                    <option 
                    v-for="(year, id) in years" 
                    :key="id" 
                    :value="year"
                    >{{year}}</option>
                </select>
            </div>
            <div class="date__item">
                <span class="register__span">Месяц:</span>
                <select 
                class="register__select" 
                name="month" 
                @change="changeDate" 
                v-model="month">
                    <option 
                    v-for="(month, id) in months" 
                    :key="id" 
                    :value="month"
                    >{{getMonth(month)}}</option>
                </select>
            </div>            
            <div class="date__item">
                <span class="register__span">День:</span>
                <select 
                class="register__select" 
                name="day" 
                @change="changeDate" 
                v-model="day">
                    <option 
                    v-for="(day, id) in createDays()" 
                    :key="id" 
                    :value="day"
                    >{{day}}</option>
                </select>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormDate',
    props: {
        title: String,
    },
    data() {
        return {
            year: 1900,
            month: 1,
            day: 1,
            years: this.createYears(),
            months: this.createMonths(),
        }
    },
    methods: {
        createYears() {
            let now = new Date().getFullYear(),
            years = [];
            for (let i = 1900; i <= now; i++) 
                years[i-1900] = i;
            return years;
        },
        createMonths() {
            let months = [];
            for (let i = 1; i <= 12; i++)
                months[i-1] = i;
            return months;
        },
        createDays() {
            let days = [];
            const count = this.getDays(this.year, this.month);
            for (let i = 1; i <= count; i++)
                days[i-1] = i;
            this.day = (this.day <= count) ? this.day : 1;
            return days;
        },
        getDays(year, month) {
            if (month === 2 && year % 4 === 0)
                return 29;
            switch(month) {
                case 1: return 31;
                case 2: return 28;
                case 3: return 31;
                case 4: return 30;
                case 5: return 31;
                case 6: return 30;
                case 7: return 31;
                case 8: return 31;
                case 9: return 30;
                case 10: return 31;
                case 11: return 30;
                case 12: return 31;
                default: return month;
            }
        },
        getMonth(num) {
            switch(num) {
                case 1: return 'Январь';
                case 2: return 'Февраль';
                case 3: return 'Март';
                case 4: return 'Апрель';
                case 5: return 'Май';
                case 6: return 'Июнь';
                case 7: return 'Июль';
                case 8: return 'Август';
                case 9: return 'Сентябрь';
                case 10: return 'Октябрь';
                case 11: return 'Ноябрь';
                case 12: return 'Декабрь';
            }
        },
        changeDate() {
            const date = {
                year: this.year,
                month: this.month,
                day: this.day
            }
            this.$emit('getDate', date);
        }
    },
    computed: {
    }
}
</script>

<style lang="scss">

</style>
