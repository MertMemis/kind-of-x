			<h3 className="px-4 h-[3.313rem] flex items-center text-xl font-bold">
				{title}
			</h3>
			{children}
		</header>
	)
}

StickyHeader.propTypes = {
	title: PropTypes.string.isRequired
}