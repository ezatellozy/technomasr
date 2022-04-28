<template>
  <div class="fixed-bottom">
    <ul>
      <li>
        <a
          href="https://wa.me/+201097225751"
          target="_blank"
          class="floatWhats"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
li {
  list-style: none;
}
.floatWhats {
  color: white !important;
  font-size: 40px;
  background-color: #1aa153;
  padding: 0px 18px;
  border-radius: 50%;
}
.fixed-bottom {
  left: 10px;
  right: unset;
}
</style>
