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
              Nice to meet you!
            </div>
            <div class="font-thin text-kuning text-7xl pt-10">
              I'm <span class="font-extrabold">Vannes</span>,<br />
              a software engineer and a computer science student based in
              Jakarta.
            </div>
          </div>
          <div class="grid col-span-1 pt-20">
            <div
              class="w-128 h-128 rounded-full bg-cover bg-center"
              :style="profpic"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-birutua h-screen"></section>
    <section class="bg-birutua h-screen"></section>
    <section class="bg-birutua h-screen"></section>
    <section class="bg-kuning h-full w-screen pb-20 flex flex-col items-center">
      <div ref="works" class="font-black text-birutua text-9xl uppercase pt-20">
        My Works &
      </div>
      <div ref="contrib" class="font-black text-birutua text-9xl uppercase">
        Contributions
      </div>
      <div
        class="bg-cover bg-center w-3/4 h-160 mt-20 rounded-3xl group"
        :style="farmapic"
      >
        <div
          class="group-hover:opacity-100 opacity-0 transition duration-500 ease-in-out relative flex flex-col items-center w-full h-full"
        >
          <div class="flex flex-col absolute z-50 items-center">
            <div class="font-black text-white text-8xl pt-20">
              FARMAPLUS
            </div>
            <div class="grid grid-cols-2 px-20 pt-20">
              <div class="font-thin text-4xl text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                architecto quae saepe sequi sapiente laboriosam, fugit eius
                quibusdam ipsam dolore libero dolorum.
              </div>
              <div
                class="rotate bg-opacity-0 bg-white hover:bg-opacity-100 border-2 border-white rounded-full w-48 h-48 ml-40 mt-10 flex items-center text-white hover:text-black transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  class="font-black text-2xl pl-10 flex flex-col items-center"
                >
                  <div>VIEW</div>
                  <div>PROJECT</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
            bg-black
            absolute
            opacity-50
            w-full
            h-full
            inset-0
            rounded-3xl
          "
          ></div>
          <div
            class="
            bg-gradient-to-b
            from-black
            via-transparent
            to-transparent
            absolute
            opacity-70
            w-full
            h-full
            inset-0
            rounded-3xl
          "
          ></div>
        </div>
      </div>
      <div
        class="bg-cover bg-center w-3/4 h-160 mt-20 rounded-3xl group"
        :style="archiopic"
      >
        <div
          class="group-hover:opacity-100 opacity-0 transition duration-500 ease-in-out relative flex flex-col items-center w-full h-full"
        >
          <div class="flex flex-col absolute z-50 items-center">
            <div class="font-black text-white text-8xl pt-20">
              ARCHIO
            </div>
            <div class="grid grid-cols-2 px-20 pt-20">
              <div class="font-thin text-4xl text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                architecto quae saepe sequi sapiente laboriosam, fugit eius
                quibusdam ipsam dolore libero dolorum.
              </div>
              <div
                class="rotate bg-opacity-0 bg-white hover:bg-opacity-100 border-2 border-white rounded-full w-48 h-48 ml-40 mt-10 flex items-center text-white hover:text-black transition duration-500 ease-in-out cursor-pointer"
              >
                <div
                  class="font-black text-2xl pl-10 flex flex-col items-center"
                >
                  <div>VIEW</div>
                  <div>PROJECT</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
            bg-black
            absolute
            opacity-70
            w-full
            h-full
            inset-0
            rounded-3xl
          "
          ></div>
        </div>
      </div>
    </section>
    <section class="bg-cover bg-center h-screen relative" :style="mountainpic">
      <div class="absolute z-50 flex flex-col">
        <div class="font-black text-kuning text-9xl pl-20 pt-20">
          SKILLS
        </div>
        <div
          ref="containerProg"
          class="progress ml-20 mt-20 rounded-3xl transition-all duration-500 ease-in-out"
        >
          <div
            ref="progress"
            @click="langClick"
            class="progress-value flex items-center rounded-3xl cursor-pointer hover:bg-birutua group transition-all duration-500 ease-in-out"
          >
            <div
              :class="{ 'opacity-100': !langlong }"
              class="opacity-0 text-5xl font-black text-birutua pl-10 group-hover:text-kuning transition-all duration-500 ease-in-out"
            >
              LANGUAGES
            </div>
            <div
              :class="{ 'opacity-100': langlong }"
              class="opacity-0 text-5xl font-black text-birutua pl-10 group-hover:text-kuning transition-all duration-200 ease-in-out absolute grid grid-cols-2 gap-20"
            >
              <div class="flex flex-col">
                <p>Python</p>
                <p>Javascript</p>
              </div>
              <div class="flex flex-col">
                <p>HTML</p>
                <p>CSS</p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref="containerProg2"
          class="progress ml-20 mt-5 rounded-3xl transition-all duration-500 ease-in-out"
        >
          <div
            ref="progress2"
            @click="toolClick"
            class="progress-value flex items-center rounded-3xl hover:bg-birutua group transition-all duration-500 ease-in-out cursor-pointer"
          >
            <div
              :class="{ 'opacity-100': !toollong }"
              class="opacity-0 text-5xl font-black text-birutua pl-10 absolute z-50 group-hover:text-kuning transition duration-500 ease-in-out"
            >
              TOOLS & FRAMEWORKS
            </div>
            <div
              :class="{ 'opacity-100': toollong }"
              class="opacity-0 text-5xl font-black text-birutua pl-10 group-hover:text-kuning transition-all duration-200 ease-in-out grid grid-cols-2 gap-20"
            >
              <div class="flex flex-col">
                <p>Vue.js</p>
                <p>GraphQL</p>
                <p>Strapi.js</p>
              </div>
              <div class="flex flex-col">
                <p>Tailwind CSS</p>
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          bg-birutua
          via-transparent
          to-transparent
          absolute
          opacity-70
          w-full
          h-full
          inset-0
        "
      ></div>
    </section>
    <section class="bg-birutua h-screen"></section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";

export default {
  setup() {
    const hey = ref(null);
    const letMe = ref(null);
    const intro = ref(null);
    const works = ref(null);
    const contrib = ref(null);
    const progress = ref(null);
    const progress2 = ref(null);
    const containerProg = ref(null);
    const containerProg2 = ref(null);

    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = (evt) => {
      const scrollY = window.scrollY;
      console.log(scrollY);

      hey.value.style.transform = "translateY(" + -scrollY + "px)";
      letMe.value.style.transform = "translateY(" + scrollY + "px)";
      intro.value.style.transform = "translateX(" + -scrollY + "px)";
      works.value.style.transform = "translateX(" + -(scrollY - 3100) + "px)";
      contrib.value.style.transform = "translateX(" + (scrollY - 3100) + "px)";
      if (((scrollY - 4600) / 1000) * 100 < 60) {
        progress.value.style.width = ((scrollY - 4400) / 1000) * 100 + "%";
        progress2.value.style.width = ((scrollY - 4400) / 1000) * 100 + "%";
      }
    };

    const langlong = ref(false);
    const toollong = ref(false);

    const langClick = () => {
      if (toollong.value) {
        toolClick();
      }
      langlong.value = !langlong.value;
      if (langlong.value == true) {
        progress.value.style.width = "100%";
        containerProg.value.style.height = "350px";
        progress.value.style.height = "320px";
      } else {
        progress.value.style.width = "54%";
        containerProg.value.style.height = "120px";
        progress.value.style.height = "90px";
      }
    };
    const toolClick = () => {
      if (langlong.value) {
        langClick();
      }
      toollong.value = !toollong.value;
      if (toollong.value == true) {
        progress2.value.style.width = "100%";
        containerProg2.value.style.height = "350px";
        progress2.value.style.height = "320px";
      } else {
        progress2.value.style.width = "54%";
        containerProg2.value.style.height = "120px";
        progress2.value.style.height = "90px";
      }
    };

    const profpic = computed(() => {
      return {
        backgroundImage: `url(${require("../assets/profpic.jpg")})`,
      };
    });
    const mountainpic = computed(() => {
      return {
        backgroundImage: `url(${require("../assets/mountain.jpg")})`,
      };
    });
    const farmapic = computed(() => {
      return {
        backgroundImage: `url(${require("../assets/farmaplus.png")})`,
      };
    });
    const archiopic = computed(() => {
      return {
        backgroundImage: `url(${require("../assets/archiopic.png")})`,
      };
    });

    return {
      hey,
      letMe,
      intro,
      profpic,
      mountainpic,
      farmapic,
      works,
      contrib,
      archiopic,
      progress,
      progress2,
      langClick,
      toolClick,
      langlong,
      toollong,
      containerProg,
      containerProg2,
    };
  },
};
</script>

<style scoped>
.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.fading {
  background: #fca311;
  animation: fading 5s infinite;
  -webkit-animation: fading 5s infinite;
}

@keyframes fading {
  0% {
    background: #fca311;
  }
  50% {
    background: #14213d;
  }
  100% {
    background: #fca311;
  }
}

@-webkit-keyframes fading {
  0% {
    background: #fca311;
  }
  50% {
    background: #14213d;
  }
  100% {
    background: #fca311;
  }
}
@keyframes opacityfading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes opacityfading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.progress {
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  height: 120px;
  width: 1200px;
}

.progress-value {
  background: #fca311;
  height: 90px;
}
</style>
