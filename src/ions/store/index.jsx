import create from "zustand";

const useStore = create(set => {
	return {
		instructor: [],
		setInstructor: dbData => set({ instructor: dbData }), // isExpanded: false
		setIsExpanded: () =>
			set(state => ({
				isExpanded: !state.isExpanded,
			})),
		filterStatus: null,
		setFilterStatus: status => set({ filterStatus: status }),
		submitStatus: false,
		setSubmitStatus: status => set({ submitStatus: status }),
		view: "profile",
		setView: setting => set({ view: setting }),
	};
});

export default useStore;
