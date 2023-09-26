import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export default function DateProvider({ children }) {
	const [date, setDate] = useState([]);
	const value = {
		date,
		setDate,
	};

	return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export function useDate() {
	return useContext(DateContext);
}
