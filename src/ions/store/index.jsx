import create from "zustand";
import { v4 as uuid } from "uuid";
import produce from "immer";

const useStore = create(set => {
	return {
		cards: [],
		setCard: formData =>
			set(
				produce(state => {
					state.cards.push({
						...formData,
						isExpanded: false,
						id: uuid(),
					});
				})
			),
		setExpanded: index =>
			set(
				produce(state => {
					state.cards[index].isExpanded = !state.cards[index].isExpanded;
				})
			),
		submitStatus: false,
		setSubmitStatus: status => set({ submitStatus: status }),
		view: "profile",
		setView: setting => set({ view: setting }),
	};
});

export default useStore;
