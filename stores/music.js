import { defineStore } from "pinia";
import { useKnightStore } from "./knight";

export const useAudioStore = defineStore("music", () => {
  const knightStore = useKnightStore();

  const music = {
    out: {
      getRoleAudioUrl: () => {
        {
          ESTest(knightStore.data.isDeathKnight, "boolean");
        }

        if (knightStore.data.isDeathKnight) {
          return "/knight/deathKnight_audio.mp3";
        } else {
          return "/knight/knight_audio.mp3";
        }
      },
    },
  };
  return {
    data: music.data,
    out: music.out,
  };
});
