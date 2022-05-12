<template>
  <div class="row member-card justify-content-center">
    <div class="col-md-12 image">
      <img
        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
        alt="wrapkit"
        class="img-fluid rounded-circle"
      />
    </div>
    <div class="col-md-12 text-center">
      <div class="pt-2">
        <h5 class="mt-4 font-weight-medium main-color mb-0">Michael Doe</h5>
        <h6 class="subtitle mb-3">Property Specialist</h6>
        <p>
          You can relay on our amazing features list and also our customer
          services will be great experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.member-card {
  max-width: 300px;
  margin: 0 auto;
  transition: all 0.3s;
  .image {
    width: 200px;
    position: relative;
    overflow: hidden;
    padding: 2px;
    border-radius: 50%;
    display: inline-block;
    &::before {
      content: '';
      display: block;
      background: var(--border-bg);
      width: calc(100% * 1.41421356237);
      padding-bottom: calc(100% * 1.41421356237);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      z-index: -2;
      background: conic-gradient(
        #fff 0turn 0.05turn,
        #011f31 0.05turn 0.1turn,
        #fff 0turn 0.05turn,
        #011f31 0.05turn 0.1turn,
        #fff 0.1turn 0.15turn,
        #011f31 0.15turn 0.2turn,
        #fff 0.2turn 0.25turn,
        #011f31 0.25turn 0.3turn,
        #fff 0.3turn 0.35turn,
        #011f31 0.35turn 0.4turn,
        #fff 0.4turn 0.45turn,
        #011f31 0.45turn 0.5turn,
        #fff 0.5turn 0.55turn,
        #011f31 0.55turn 0.6turn,
        #fff 0.6turn 0.65turn,
        #011f31 0.65turn 0.7turn,
        #fff 0.7turn 0.75turn,
        #011f31 0.75turn 0.8turn,
        #fff 0.8turn 0.85turn,
        #011f31 0.85turn 0.9turn,
        #fff 0.9turn 0.95turn,
        #011f31 0.95turn 1turn
      );
    }
    &:hover {
      &::before {
        animation: spin 5s linear infinite;
      }
    }
  }
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
