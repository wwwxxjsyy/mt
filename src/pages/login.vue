<template>
    <div class="mt-login">
            <div class="card">
                <mt-login-header/>
                <mt-login-verification/>
                
            </div>
            
    </div>
</template>

<script>
import MtLoginVrification from '../components/login/loginVerification'
import MtLoginHeader from '../components/login/loginHeader'
export default {
    name:"MtLogin",
    components:{
        'mt-login-verification':MtLoginVrification,
        'mt-login-header':MtLoginHeader
    },
     data(){
        return {
            phone:'',
            verification:'',
        }
    },
    methods:{
        onSubmit(){
        
                const formData = {
                    phone:this.phone,
                    verification:this.verification
                }
                axios.post('http://localhost:5000/api/users/register',formData)
                .then(res=>{
                    console.log(res)
                    this.$router.push({name:'loginLink'})
                })

           

            
        }
    }

}
</script>

<style scoped>
input{
    outline:none;
    padding-left:.1rem;
    font-size:.35rem;
}
.mt-login{
    background:#fff;
    height:100%;
}

</style>