export const playAudioFile = (fileName: string): void => {
	if (!fileName) return;
	const audio = new Audio(`audio/${fileName}.mp3`);
	audio.play();
};
