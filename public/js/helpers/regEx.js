const exp = {
	dni: /^[0-9]{10}$/,
	fingerprint: /^[0-9]{10}$/,
	names: /^[A-Za-z]{8,16}$/,
	email:
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
	//must have letters, number & characters
	address: /.{8,16}/,
	decimal: /^[0-9]{1,4}\.?[0-9]{0,3}$/,
};

const validate = (value, type) => {
	console.log(value, type);
	return exp[type].test(value);
};
export default validate;
