{
	/**
	 * Intersection Types : and
	 */

	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		emploteeId: number;
		work: () => void;
	};

	function internWork(person: Student & Worker) {
		console.log(person.name, person.emploteeId, person.score);
		person.work();
	}

	internWork({
		name: "sinho",
		score: 1,
		emploteeId: 2,
		work: () => console.log(`나 일해`),
	});
}
