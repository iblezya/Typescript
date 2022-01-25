(() => {

  enum AudioLevel {
    min = 1,
    medium,
    medium2,
    max = 10
  }

  let currentAudio: AudioLevel = AudioLevel.medium;
  let currentAudio2: AudioLevel = AudioLevel.medium2;
  console.log(AudioLevel);
  console.log(currentAudio);
  console.log(currentAudio2);


})()