<template>
    <div class="form-group row mb-3">
        <label for="" class="col-form-label">42. Отметка о выдаче листка нетрудоспособности</label>
        <div class="col-sm-12" v-for="item in ListFormAegrotat">
            <div class="row mb-3">
                <label class="col-sm-1">{{ item.name }}</label>
                <div class="col">
                    <input type="text" class="form-control" placeholder="">
                </div>
                <label class="col-sm-1">{{ item.start }}</label>
                <div class="col">
                    <input type="text" class="form-control" placeholder="">
                </div>
                <label class="col-sm-1">{{ item.end }}</label>
                <div class="col">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-light" @click="addAreaFormAegrot">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExaminationFormAegrotat",
        data(){
            return{
                ListFormAegrotat:[
                    {'name' : 'N', 'start' : 'c', 'end' : 'по'},
                    {'name' : 'N', 'start' : 'c', 'end' : 'по'},
                    {'name' : 'N', 'start' : 'c', 'end' : 'по'},
                ]
            }
        },
        methods:{
            addAreaFormAegrot(){
                this.ListFormAegrotat.push(
                    {'name' : 'N', 'start' : 'c', 'end' : 'по'}
                )
            }
    }
}
</script>

<style lang="scss" scoped>

</style>