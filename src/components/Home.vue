<template>
  <div class="overflow-hidden">
    <section class="bg-kuning w-screen h-screen flex">
      <div class="flex flex-nowrap fixed">
        <div class="w-screen flex flex-col justify-center pl-28 pb-40">
          <div
            ref="hey"
            class="font-thin text-kuning text-9xl absolute pl-90 z-50 flex flex-col"
          >
            <div>Vannes Wijaya</div>
            <div class="text-5xl pt-10">Full-stack developer</div>
            <div class="icon-scroll right-0"></div>
            <div class="scroll-down right-0 text-xl">SCROLL DOWN</div>
          </div>
          <div ref="letMe" class="waves"></div>
        </div>
        <div
          ref="intro"
          class="w-screen h-screen grid grid-cols-2 gap-x-5 py-20"
        >
          <div class="col-span-1 flex flex-col">
            <div class="font-black text-birutua text-9xl uppercase pt-16">
              Nice to meet you!
            </div>
            <div class="font-light text-birutua text-5xl pt-10">
              I'm <span class="font-extrabold">Vannes</span>,<br />
              a software engineer and a computer science student from Jakarta,
              currently living in Hong Kong.
            </div>
          </div>
          <div class="col-span-1 pt-20">
            <div
              class="w-128 h-128 rounded-full bg-cover bg-center"
              :style="profpic"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-kuning h-screen"></section>
    <section class="bg-kuning h-screen"></section>
    <section class="bg-kuning h-screen"></section>
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
                A prescription drugs and supplements database website in which
                users can look for medicine availability in a particular city,
                province, and/or pharmacy.
              </div>
              <div
                @click="goToFarma()"
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
                A corporate dummy website made with Vue 3, comprising elegant
                web design, animations, and responsiveness. The content theme is
                about an architectural studio.
              </div>
              <div
                @click="goToArchio()"
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
    <div class="wrapper overflow-x-hidden overflow-y-hidden h-screen bg-fixed">
      <section
        class="parallax relative bg-cover bg-center h-full bg-fixed"
        :style="mountainpic"
      >
        <div class="absolute z-50 flex flex-col items-center w-full">
          <div class="font-black text-kuning text-9xl pt-20">
            SKILLS
          </div>
          <div
            ref="containerProg"
            class="progress mt-20 rounded-3xl transition-all duration-500 ease-in-out"
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
                class="opacity-0 text-5xl font-black text-birutua pl-20 group-hover:text-kuning transition-all duration-200 ease-in-out absolute grid grid-cols-2 gap-20"
              >
                <div class="flex flex-col gap-y-10">
                  <img
                    class="h-28 w-28"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
                    alt=""
                  />
                  <img
                    class="h-28 w-28"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    alt=""
                  />
                </div>
                <div class="flex flex-col gap-y-10">
                  <img
                    class="h-28 w-28"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                    alt=""
                  />
                  <img
                    class="h-28 w-28"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref="containerProg2"
            class="progress mt-5 rounded-3xl transition-all duration-500 ease-in-out"
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
                class="opacity-0 text-5xl font-black text-birutua pl-20 group-hover:text-kuning transition-all duration-200 ease-in-out grid grid-cols-3 gap-20"
              >
                <div class="flex flex-col gap-y-10">
                  <img
                    class="h-28 w-28"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                    alt=""
                  />
                  <img
                    class="h-28 w-28"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
                    alt=""
                  />
                </div>
                <div class="flex flex-col gap-y-10">
                  <img
                    class="h-28 w-28"
                    src="https://static-00.iconduck.com/assets.00/strapi-icon-512x505-3hl7a1v3.png"
                    alt=""
                  />
                  <img
                    class="h-28 w-28"
                    src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col gap-y-10">
                  <img
                    class="h-28 w-28"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt=""
                  />
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
    </div>
    <section class="bg-birutua h-screen w-screen flex flex-col items-center">
      <div class="font-black text-kuning mt-20 text-9xl">
        EDUCATION
      </div>
      <div class="grid grid-cols-2 justify-items-center py-20 gap-x-20">
        <div class="flex flex-col justify-center">
          <div class="h-40 w-40">
            <img
              src="https://play-lh.googleusercontent.com/GiVgVn2OmdZV4-ch3bfh7Lsa7aVqUehQyf_FX1QJVveeHw74z-JosBWTrv73af3SOw"
              alt=""
            />
          </div>
          <div class="font-thin text-kuning text-3xl">
            <div class="font-extrabold text-5xl">Canisius College</div>
            <div class="font-extrabold">2018 - 2021</div>
            <div class="pt-10">
              <ul>
                <li>- Majoring in Natural Science</li>
                <li>- President of Student Council (2020 - 2021)</li>
                <li>- Received Pedro Arrupe Leadership Award</li>
                <li>- Member of Canisius Computer Club</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <div class="h-36 w-40">
            <img
              src="https://www.cser.ac.uk/media/uploads/files/R073beefb0c7fb9a344a11ead80fd70b8.png"
              alt=""
            />
          </div>
          <div class="font-thin text-kuning text-3xl">
            <div class="font-extrabold text-5xl">
              City University of<br />
              Hong Kong
            </div>
            <div class="font-extrabold">2021 - Present</div>
            <div class="pt-10">
              <ul>
                <li>- Majoring in Computer Science (Freshman)</li>
                <li>- Full Tuition Entrance Scholarship Awardee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-kuning">
      <div class="flex flex-col px-20 pt-20 pb-28 text-birutua">
        <div class=" text-9xl font-black uppercase">Say hello.</div>
        <div class="w-3/4 h-4 mt-5 bg-birutua"></div>
        <div class="pt-20 font-extrabold flex flex-col">
          <div class="text-3xl">Email :</div>
          <div class="text-5xl z-50 cursor-pointer group w-128">
            <a href="mailto:vanneswjya@gmail.com">vanneswjya@gmail.com</a>
            <div
              class="group-hover:w-96 w-0 h-2 mt-2 bg-birutua transition-all duration-500 ease-in-out"
            ></div>
          </div>
        </div>
        <div class="flex flex-row gap-x-10 pt-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vanneswijaya"
            class="z-50"
          >
            <img
              class="h-20 w-20"
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt=""
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/vanneswijaya/"
            class="z-50"
          >
            <img
              class="h-20 w-20"
              src="https://image.flaticon.com/icons/png/512/61/61109.png"
              alt=""
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/vanneswijaya/"
            class="z-50"
          >
            <img
              class="h-20 w-20"
              src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
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
      letMe.value.style.transform = "translateY(" + -scrollY + "px)";
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

    const goToArchio = () => {
      location.href = "https://vanneswijaya.github.io/archio/";
    };

    const goToFarma = () => {
      location.href = "https://farmaplus.kemkes.go.id";
    };

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
      goToArchio,
      goToFarma,
    };
  },
};
</script>

<style scoped>
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  bottom: -125%;
}

.scroll-down {
  position: absolute;
  bottom: -145%;
  right: -3%;
}

.icon-scroll {
  width: 80px;
  height: 140px;
  box-shadow: inset 0 0 0 1px #fca311;
  border-radius: 50px;
}

.icon-scroll:before {
  content: "";
  width: 16px;
  height: 16px;
  background: #fca311;
  margin-left: 32px;
  top: 28px;
  border-radius: 50px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0px;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
}

.waves::before,
.waves::after {
  content: "";
  position: absolute;
  width: 250vw;
  height: 250vw;
  top: -65vw;
  left: 50%;
  border-radius: 44%;
  transform: translate(-50%, -75%);
}

.waves::before {
  background: rgba(51, 51, 51, 1);
  animation: waves 8s linear infinite;
}

.waves::after {
  background: #14213d;
  animation: waves 15s linear infinite;
}

@keyframes waves {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

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

.wrapper {
  perspective: 2px;
}

.parallax::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-1px) scale(1.5);
  background-size: 100%;
  z-index: -1;
}
</style>
