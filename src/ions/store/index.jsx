import { v4 as uuid } from "uuid";
import create from "zustand";

const useStore = create(set => {
	return {
		cards: [],
		setCard: formData =>
			set(state => ({
				cards: [
					...state.cards,
					{
						...formData,
						id: uuid(),
					},
				],
			})),
	};
});

export default useStore;
