	const items = stickyHeader[0]

	const content = contents.find(c => c.props.id === active)

	const data = {
		active,
		setActive
	}

	return (
		<TabContext.Provider value={data}>
			{items}
			{content}
		</TabContext.Provider>
	)
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.node
	),
	activeTab: PropTypes.string.isRequired
}