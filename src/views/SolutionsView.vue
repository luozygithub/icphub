<template>
  <div class="about">
    <div class="part1">
      <div class="bg-box"></div>
      <div class="sub-title fade-in-section">
        {{ $t('solutionPart1Title1') }}
      </div>
      <div class="title fade-in-section">
        {{ $t('solutionPart1Title2') }}
      </div>
    </div>
    <div class="part2">
      <div class="content-list ">
        <div class="list-item fade-in-section">
          <div class="title">
            {{ $t('solutionPart2Title1') }}
          </div>
          <p>
            {{ $t('solutionPart2Content11') }}
          </p>
          <p>
            {{ $t('solutionPart2Content12') }}
          </p>
        </div>
        <div class="list-item fade-in-section">
          <div class="title">
            {{ $t('solutionPart2Title2') }}
          </div>
          <p>
            {{ $t('solutionPart2Content21') }}
          </p>
          <p>
            {{ $t('solutionPart2Content22') }}
          </p>
        </div>

        <div class="list-item fade-in-section">
          <div class="title">
            {{ $t('solutionPart2Title3') }}
          </div>
          <p>
            {{ $t('solutionPart2Content31') }}
          </p>
          <p>
            {{ $t('solutionPart2Content32') }}
          </p>
        </div>
        <div class="list-item fade-in-section">
          <div class="title">
            {{ $t('solutionPart2Title4') }}
          </div>
          <p>
            {{ $t('solutionPart2Content41') }}
          </p>
          <p>
            {{ $t('solutionPart2Content42') }}
          </p>
        </div>
      </div>
    </div>
    <div class="part3 fade-in-section">
      <button>
        {{ $t("Apply Today") }}
      </button>
      <p>
        {{ $t("solutionPart3") }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  min-height: 90vh;
  .part3 {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      padding: 10px 30px;
      border-radius: 14px 14px 14px 14px;
      border: 2px solid #6A36FF;
      margin: 0 auto;
      font-family: Poppins;
      font-weight: 500;
      font-size: 30px;
      color: #6A36FF;
      background: none;
      text-align: center;
    }

    p {
      width: 1071px;
      height: 55px;
      font-family: DM Sans, DM Sans;
      font-weight: 400;
      font-size: 20px;
      color: #68718B;
      line-height: 27px;
      margin: 0 auto;
      margin-top: 25px;

    }
  }

  .part2 {
    position: relative;
    z-index: 1;
    width: 100%;

    .content-list {
      display: flex;
      flex-wrap: wrap;


      .list-item {
        width: 50%;
        padding: 120px 70px;
        background: #F3EEFF;



        .title {
          font-family: Poppins, Poppins;
          font-weight: 500;
          font-size: 36px;
          color: #000000;
          line-height: 57px;
          margin-bottom: 20px;
        }

        p {
          font-family: Poppins, Poppins;
          font-weight: 400;
          font-size: 18px;
          color: #777777;
          line-height: 24px;
          margin-top: 30px;

        }

        &:nth-child(2),&:nth-child(3)  {
          background: linear-gradient(139deg, #9F9FFF 0%, #D4B9FF 93%, #FFFFFF 120%);

          .title {
            color: #FFFFFF;
          }

          p {
            color: #FFFFFF;

          }
        }
        &:nth-child(4){

          p{
            color: #000000;
          }
        }
      }
    }
  }

  .part1 {
    margin: 110px 0;

    .sub-title {
      text-align: center;
      font-family: DM Sans, DM Sans;
      font-weight: 500;
      font-size: 36px;
      color: #FFFFFF;
      line-height: 40px;
      position: relative;
      z-index: 1;
      background-color: transparent;
      background-image: linear-gradient(127deg, #3C03BA 25%, #ED1E79 63%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }

    .title {
      position: relative;
      z-index: 1;
      font-family: DM Sans, DM Sans;
      font-weight: 700;
      font-size: 68px;
      color: #FFFFFF;
      text-align: center;
      margin-top: 20px;
    }
  }
}
@media (max-width: 1200px) {
  .about {
    .part3 {
      padding: 60px 0; /* 增加上内边距 */

      button {
        width: 60%; /* 调整宽度 */
        height: 70px; /* 增加高度 */
        font-size: 22px; /* 增加字体大小 */
        line-height: 32px; /* 增加行高 */
        margin-left: calc(20%); /* 增加左右间距 */
      }

      p {
        width: 80%; /* 调整宽度 */
        font-size: 18px; /* 增加字体大小 */
        line-height: 26px; /* 增加行高 */
        margin-top: 20px; /* 增加顶部间距 */
      }
    }

    .part2 {
      .content-list {
        .list-item {
          width: 100%;
          padding: 60px 30px; /* 增加内边距 */

          .title {
            font-size: 36px; /* 增加字体大小 */
            line-height: 42px; /* 增加行高 */
            margin-bottom: 20px; /* 增加底部间距 */
          }

          p {
            font-size: 20px; /* 增加字体大小 */
            line-height: 30px; /* 增加行高 */
          }
        }
      }
    }

    .part1 {
      margin: 80px 0; /* 增加上下外边距 */

      .sub-title {
        font-size: 28px; /* 增加字体大小 */
        line-height: 32px; /* 增加行高 */
      }

      .title {
        font-size: 40px; /* 增加字体大小 */
        margin-top: 20px; /* 增加顶部间距 */
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    .part3 {
      padding: 50px 0;

      button {
        width: 80%;
        height: 60px;
        font-size: 20px;
        line-height: 30px;
        margin-left: calc(10%);
      }

      p {
        width: 90%;
        font-size: 16px;
        line-height: 24px;
        margin-top: 15px;
      }
    }

    .part2 {
      .content-list {
        .list-item {
          width: 100%;
          padding: 40px 20px;

          .title {
            font-size: 32px;
            line-height: 36px;
            margin-bottom: 15px;
          }

          p {
            font-size: 18px;
            line-height: 28px;
          }
        }
      }
    }

    .part1 {
      margin: 60px 0;

      .sub-title {
        font-size: 24px;
        line-height: 28px;
      }

      .title {
        font-size: 36px;
        margin-top: 15px;
      }
    }
  }
}

</style>
<script>

export default {
  components: {
  },
  mounted() {

    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // 只触发一次，进入视口后不再观察
        }
      });
    }, { threshold: 0.1 });  // 10% 可见时触发

    fadeInSections.forEach(section => observer.observe(section));
  }
};
</script>
