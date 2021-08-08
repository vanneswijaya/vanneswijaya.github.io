<template>
  <div class="overflow-hidden">
    <section class="bg-birutua w-screen h-screen flex">
      <div class="flex flex-nowrap fixed">
        <div class="w-screen flex flex-col justify-center pl-32">
          <div ref="hey" class="font-black text-kuning text-9xl">Hey,</div>
          <div ref="letMe" class="font-black text-kuning text-9xl pt-10">
            Let me show you around.
          </div>
        </div>
        <div ref="intro" class="w-screen h-screen grid grid-cols-2 py-20">
          <div class="grid col-span-1">
            <div class="font-black text-kuning text-9xl uppercase">
              Nice to meet you
            </div>
            <div class="font-medium text-kuning text-7xl pt-10">
              I'm Vannes, a software engineer and a computer science student.
            </div>
          </div>
          <div class="grid col-span-1 pt-20">
            <div
              class="w-128 h-128 rounded-full bg-cover bg-center"
              style="
                background-image: url('https://i.ibb.co/K5q5z59/IMG-0555.jpg');
              "
            ></div>
            <!-- <img src="../assets/logo.png" alt="" /> -->
          </div>
        </div>
      </div>
    </section>
    <section class="bg-birutua h-screen"></section>
    <section class="bg-birutua h-screen"></section>
    <section class="bg-birutua h-screen"></section>
    <section class="bg-merah h-screen"></section>
    <!-- <section class="bg-birutua w-screen h-screen p-20 bg-fixed">
      <div class="font-black text-kuning text-9xl uppercase">
        Nice to meet you
      </div>
      <div class="font-medium text-kuning text-7xl pt-20">
        I'm Vannes, a software engineer and a computer science student.
      </div>
    </section> -->
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const hey = ref(null);
    const letMe = ref(null);
    const intro = ref(null);

    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = (evt) => {
      const scrollY = window.scrollY;

      hey.value.style.transform = "translateY(" + -scrollY + "px)";
      letMe.value.style.transform = "translateY(" + scrollY + "px)";
      intro.value.style.transform = "translateX(" + -scrollY + "px)";
    };

    return {
      hey,
      letMe,
      intro,
    };
  },
};
</script>
