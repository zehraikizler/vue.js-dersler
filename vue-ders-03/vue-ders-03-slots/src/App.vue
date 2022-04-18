<template>
  <!-- <ModalComp :onSave="onSave" :title="'ModalComp Title'" :content="content" /> -->
  <ModalComp>
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>

    <template v-slot:content>
      <p class="text-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis iusto nobis odit aliquid cupiditate, in beatae eum tempora rem id
        ipsum aliquam, accusamus rerum numquam? Tempora optio itaque dicta!
      </p>
    </template>
    <!-- <template #content>
      <p class="text-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis iusto nobis odit aliquid cupiditate, in beatae eum tempora rem id
        ipsum aliquam, accusamus rerum numquam? Tempora optio itaque dicta!
      </p>
    </template> -->

    <template #default>
      Bu default olarak gösterilecek..
    </template>
  </ModalComp>
</template>

<script>
import ModalComp from "@/components/ModalComp";
export default {
  components: {
    ModalComp
  },
  data() {
    return {
      content: `<h3 class="text-danger">title</h3>`
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    }
  }
};
</script>