import "./src/css/style.css";

export const onClientEntry = () => {
	if (process.env.NODE_ENV !== "production" && "serviceWorker" in navigator) {
		navigator.serviceWorker.getRegistrations().then((registrations) => {
			registrations.forEach((registration) => registration.unregister());
		});
	}
};
