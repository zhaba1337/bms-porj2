<template>
    <form>
        <ExaminationFormPersonalData/>
        <ExaminationFormMedicalDirection/>
        <ExaminationFormPatientDiagnosis/>
        <ExaminationFormPatientExamination/>
        <ExaminationFormPatientSurgery/>
        <ExaminationFormTreatmentInfo/>
        <ExaminationFormPrivileges/>
        <ExaminationFormAegrotat/>
        <ExaminationFormAdditional />
    </form>
</template>

<script>
import ExaminationFormPersonalData from '@/components/MyForms/ExaminationFormPersonalData.vue';
import ExaminationFormMedicalDirection from '@/components/MyForms/ExaminationFormMedicalDirection.vue';
import ExaminationFormPatientDiagnosis from '@/components/MyForms/ExaminationFormPatientDiagnosis.vue';
import ExaminationFormPatientExamination  from '@/components/MyForms/ExaminationFormPatientExamination.vue';
import ExaminationFormPatientSurgery from "@/components/MyForms/ExaminationFormPatientSurgery.vue";
import ExaminationFormTreatmentInfo from "@/components/MyForms/ExaminationFormTreatmentInfo.vue";
import ExaminationFormPrivileges from "@/components/MyForms/ExaminationFormPrivileges.vue";
import ExaminationFormAegrotat from "@/components/MyForms/ExaminationFormAegrotat.vue";
import ExaminationFormAdditional  from "@/components/MyForms/ExaminationFormAdditional.vue";

export default{
    name: 'ExaminationForm',
    components:{ExaminationFormPersonalData,
        ExaminationFormMedicalDirection,
        ExaminationFormPatientDiagnosis,
        ExaminationFormPatientExamination,
        ExaminationFormPatientSurgery,
        ExaminationFormTreatmentInfo,
        ExaminationFormPrivileges,
        ExaminationFormAegrotat,
        ExaminationFormAdditional,
    }
}
</script>

<style>

</style>