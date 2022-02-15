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
		filteredCards: [],
		setFilteredCards: filter =>
			set(
				produce(state => {
					state.filteredCards = state.cards.filter(card =>
						card.location.includes(filter)
					);
				})
			),
		setExpanded: index =>
			set(
				produce(state => {
					state.cards[index].isExpanded = !state.cards[index].isExpanded;
				})
			),

		isExpanded: false,
		setIsExpanded: () =>
			set(state => ({
				isExpanded: !state.isExpanded,
			})),

		filterStatus: false,
		setFilterStatus: status => set({ filterStatus: status }),
		submitStatus: false,
		setSubmitStatus: status => set({ submitStatus: status }),
		view: "profile",
		setView: setting => set({ view: setting }),
	};
});

export default useStore;
