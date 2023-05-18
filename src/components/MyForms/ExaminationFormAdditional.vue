<template>
    <div class="form-group row mb-3">
        <label for="birthdate" class="col-form-label">43. Информированное добровольное согласие пациентки на
            медицинское вмешательство или отказ отмедицинского вмешательства получен(о):</label>
        <div class="col-sm-12">
            <div class="row mb-3">
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
                <label class="col-sm-1">время</label>
                <div class="col">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
        </div>
    </div>
    <div class="form-group row mb-3">
        <label for="birthdate" class="col-form-label">44. Дефекты догоспитального этапа: несвоевременность госпитализации - 1, недостаточный объем
            клинико-диагностического обследования - 2, неправильная тактика лечения - 3, несовпадение диагноза - 4</label>
    </div>
    <div class="form-group row mb-3">
        <label for="birthdate" class="col-sm-2 col-form-label">45. Особые отметки</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="" placeholder="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ExaminationFormAdditional'
    }
</script>

<style lang="scss" scoped>

</style>