<template>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Role:</label>
        <select v-model="role" required>
            <option value="developer">Web developer</option>
            <option value="designer">Web designer</option>
        </select>

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms and conditions</label>
        </div>

        <label>Skills:</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div class="pill" v-for="skill in skills" :key="skill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div class="submit">
            <button>Create account</button>
        </div>
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',        
            role: '',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            // valid
            this.passwordError = this.password.length > 5 ?
             '' : 'Password incorrect'
        }
    }

}
</script>