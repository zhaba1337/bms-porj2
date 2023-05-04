<template>
    <div class="form-group row mb-3">
        <div class="mb-3">
            <label for="FullName" class="form-label">1. Фамилия Имя Отчество</label>
            <input type="text" class="form-control" id="FullName" v-model="FullName">
        </div>
    </div>

    <div class="form-group mb-3">
        <div class="row mb-3">
            <label class="form-label">2. Дата рождения:</label>
            <div class="ms-3">
                <label for="BirthdateDay" class="col-form-label">Число</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="BirthdateDay">
                </div>
                <label for="BirthdateMonth" class="col-form-label">Месяц</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="BirthdateMonth">
                </div>
                <label for="BirthdateYear" class="col-form-label">Год</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="BirthdateYear">
                </div>
            </div>
        </div>
    </div>

    <div class="form-group mb-3">
        <div class="row mb-3">
            <label class="form-label">3. Место регистрация:</label>
            <div class="ms-3">
                <div class="col">
                    <label for="Subject" class="col-form-label">Субъект Российской</label>
                    <input type="text" class="form-control" id="Subject">
                </div>
                <div class="row">
                    <div class="col">
                        <label for="Area" class="col-form-label">Район</label>
                        <input type="text" class="form-control" id="Area">
                    </div>
                    <div class="col">
                        <label for="Town" class="col-form-label">Город</label>
                        <input type="text" class="form-control" aria-label="Last name" id="Town">
                    </div>
                    <div class="col">
                        <label for="Locality" class="col-form-label">Населенный пункт</label>
                        <input type="text" class="form-control" aria-label="Last name" id="Locality">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="Street" class="col-form-label">Улица</label>
                        <input type="text" class="form-control" aria-label="First name" id="Street">
                    </div>
                    <div class="col">
                        <label for="House" class="col-form-label">Дом</label>
                        <input type="text" class="form-control" aria-label="Last name" id="House">
                    </div>
                    <div class="col">
                        <label for="Apartment" class="col-form-label">Квартира</label>
                        <input type="text" class="form-control" aria-label="Last name" id="Apartment">
                    </div>
                    <div class="col">
                        <label for="Phone" class="col-form-label">Телефон</label>
                        <input type="number" class="form-control" aria-label="Last name" id="Phone">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group row mb-3">
        <div class="mb-3">
            <label for="Address" class="form-label">4. Адрес фактического места жительства</label>
            <input type="text" class="form-control" id="Address">
        </div>
    </div>

    <div class="form-group row mb-3">
        <label for="Terrain" class="form-label">5. Местность:</label>
        <div class="col">
            <select class="form-select" id="Terrain">
                <option value="1">Городская</option>
                <option value="2">Сельская</option>
            </select>
        </div>
    </div>
    <div class="form-group row mb-3">
        <label for="FamilyStatus" class="form-label">6. Семейное положение:</label>
        <div class="col">
            <select class="form-select" id="FamilyStatus">
                <option value="1">Состоит в зарегистрированном браке</option>
                <option value="2">Не состоит в браке</option>
                <option value="3">Неизвестно</option>
            </select>
        </div>
    </div>
    <div class="form-group row mb-3">
        <label for="Education" class="form-label">7. Образование:</label>
        <div class="col">
            <select class="form-select" id="Education">
                <option value="1">Высшее</option>
                <option value="2">Среднее</option>
                <option value="3">Общее среднее</option>
                <option value="4">Основное</option>
                <option value="5">Начальное</option>
                <option value="6">Неизвестно</option>
            </select>
        </div>
    </div>
    <div class="form-group row mb-3">
        <label for="Employment" class="form-label">8. Занятость:</label>
        <div class="col">
            <select class="form-select" id="Employment">
                <option value="1">Работает</option>
                <option value="2">Проходит военную службу и приравненную к ней службу</option>
                <option value="3">Пенсионерка</option>
                <option value="4">Студентка</option>
                <option value="5">Не работает</option>
                <option value="6">Прочее</option>
            </select>
        </div>
    </div>
    <div class="form-group row mb-3">
        <div class="mb-3">
            <label for="PlaceWork" class="form-label">9. Место работы</label>
            <input type="text" class="form-control" id="PlaceWork">
        </div>
    </div>
    <div class="form-group mb-3">
        <div class="row mb-3">
            <label class="form-label">10. Родовый сертификат:</label>
            <div class="ms-3">
                <div class="row">
                    <div class="col">
                        <label for="BornSeries" class="col-form-label">Серия</label>
                        <input type="text" class="form-control" id="BornSeries">
                    </div>
                    <div class="col">
                        <label for="BornNumber" class="col-form-label">№</label>
                        <input type="number" class="form-control" aria-label="Last name" id="BornNumber">
                    </div>
                    <div class="col">
                        <label for="BornIssued" class="col-form-label">Выдан</label>
                        <input type="text" class="form-control" aria-label="Last name" id="BornIssued">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group mb-3">
        <div class="row mb-3">
            <label class="form-label">11. Полис ОМС:</label>
            <div class="ms-3">
                <div class="row">
                    <div class="col">
                        <label for="OMSSeries" class="col-form-label">Серия</label>
                        <input type="text" class="form-control" id="OMSSeries">
                    </div>
                    <div class="col">
                        <label for="OMSNumber" class="col-form-label">№</label>
                        <input type="number" class="form-control" aria-label="Last name" id="OMSNumber">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group row mb-3">
        <div class="mb-3">
            <label for="InsuranceNumber" class="form-label">12. СНИЛС</label>
            <input type="number" class="form-control" id="InsuranceNumber">
        </div>
    </div>
    <div class="form-group row mb-3">
        <div class="mb-3">
            <label for="Insurance" class="form-label">13. Наименование страхование* медицинской
                организации</label>
            <input type="text" class="form-control" id="Insurance">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ExaminationFormPersonalData',
        data(){
            return{
                FullName: "",
                len: 0
            }
        },
        created(){
            console.log(this.$store.getters.GetLen)
        }   
    }
</script>

<style>

</style>