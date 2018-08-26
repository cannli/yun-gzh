<template>
    <header class="center-header">
        <div class="">
            <slot name="arrow"></slot>
        </div>

        <div class="mint-header-button">
            <slot name="add"></slot>
        </div>

        <div>
            <slot name="info"></slot>
        </div>
    </header>
</template>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
.center-header {
  background: #000;
  padding: 20px;
  color: #fff;
}
</style>

