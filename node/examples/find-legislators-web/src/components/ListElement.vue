<template>
  <li class="list-group-item">
    <div class="row text-left">
      <div class="col-2 text-center">
        <b>{{title}}</b>
      </div>
      <div class="col-10">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListElement',
  props: {
    title: {
      type: String, 
      required: true
    }
  }
}
</script>

