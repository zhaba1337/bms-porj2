<template>
    <div class="form-group row mb-3">
                <label for="birthdate" class="col-sm-2 col-form-label">14. Дата поступления в медицинскую организацию:</label>
                <div class="col-sm-10">
                    <div class="row">
                        <label class="col-sm-1">число</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <label class="col-sm-1">месяц</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <label class="col-sm-1">год</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row mb-3">
                <label for="" class="col-form-label">15. Роды вне медицинской организации: да -1 , нет - 2</label>
            </div>
            <div class="form-group row mb-3">
                <label for="" class="col-form-label">16. Направлена: медицинской организацией - 1, выездной бригадой скорой
                    медицинской помощи - 2, полицией - 3, обратилась самостоятельно - 4</label>
            </div>
            <div class="form-group row mb-3">
                <div class="col-sm-12">
                    <div class="row">
                        <label class="col-sm-1">17.Отделение</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <label class="col-sm-1">палата N</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row mb-3">
                <label for="" class="col-sm-5 col-form-label">18. Наименование направившей медицинской организации</label>
                <div class="col-sm-7">
                    <input type="email" class="form-control" id="" placeholder="">
                </div>
            </div>
</template>

<script>
    export default {
        name: "ExaminationFormMedicalDirection"
    }
</script>

<style>

</style>