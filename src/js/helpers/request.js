export default async function get(API) {
	try {
		const res = await fetch(API),
			json = await res.json();

		if (!res.ok) throw { status: res.status, statusText: res.statusText };
		return json;
	} catch (e) {
		return e;
	}
}

export async function post(API, data) {
	try {
		let options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};

		const res = await fetch(API, options),
			json = await res.json();

		if (!res.ok) throw { status: res.status, statusText: res.statusText };
		return json;
	} catch (e) {
		return e;
	}
}
