<template>
    <div class="messageVerification">
    wwwwww
            
    </div>
</template>

<script>
export default {
    name:"MtLoginVrification",
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

</style>