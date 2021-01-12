import { createGlobalStyle } from "styled-components";

import { theme } from "@/styles";

export const GlobalStyle = createGlobalStyle`
	html {
		background: #101010;
	}

	body {
		font-family: ${theme.font};
		font-weight: 400;
		font-size: 1em;
		line-height: 1.62em;
	}

	*::-moz-selection{
		background: ${theme.colors.select};
	}

	*::selection {
		background: ${theme.colors.select};
	}

	a {
		background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJCS5zdDB7ZmlsbDojMDAwMENDO30NCgk8L3N0eWxlPg0KCTxnIGlkPSJZMkJjMjcudGlmIj4NCgkJPGc+DQoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDMwLjksNDkuMmMtMSwwLTIsMC0zLDBjLTAuMS0wLjMtMC4yLTAuOC0wLjQtMC44Yy0xLjgtMC40LTQtMC4zLTUuNC0xLjNjLTEuOC0xLjQtNC4zLDAuMS01LjgtMS45Yy00LjMtMS04LjUtMi4zLTEyLjgtMi45Yy0zLjQtMC41LTYuOS0wLjEtMTAuMy0wLjFjLTAuMywwLjgtMC41LDEuNC0wLjcsMmMtMC41LTAuMy0wLjktMC42LTEuNC0xYy0wLjIsMS4yLTAuMywyLjEtMC42LDMuN2MtMS0xLjMtMS41LTIuMS0xLjktMi42Yy0yLjgsMC01LjMtMC41LTcuNCwwLjFjLTIuMiwwLjctMy43LDAuOC01LjktMC4xYy0yLjItMC45LTIuOS0yLjYtNC00Yy0yLjUsMS4yLTUuMSwxLjEtNy41LDAuMmMtMS4yLTAuNS0yLTAuNi0zLjEsMC4xYy0xLjIsMC43LTIuNiwxLTMuOSwxLjRjLTAuMiwwLjEtMC42LTAuMi0wLjgtMC4zYy0xLjItMS4zLDIuNC0yLjMsMC0zLjdjLTIuNiwxLjYtNS4yLDMuMy04LDVjLTAuOCwwLTEuOSwwLjMtMi43LTAuMWMtMi40LTEuMS00LjgtMi4zLTYuOS0zLjljLTEuOS0xLjUtMy45LTIuMi02LjItMmMtMSwwLjEtMiwwLTIuOCwwYy0wLjgtMS4xLTEuNC0yLTIuNy0zLjljMCwyLjMsMCwzLjYsMCw0LjljLTMuNywwLjgtNywxLjYtMTAuMywyLjNjLTEuNC0xLjgtMi42LTMuMi0zLjktNC45Yy0wLjQsMC44LTAuNiwxLjItMC43LDEuNmMtMC44LDMuMi0xLDMuMS00LjIsMi4zYy0yLjktMC43LTUuNC0yLjQtOC40LTMuNmMtMS42LDItMy4yLDQtNS4yLDYuNWMtMy44LTIuMi03LjgsMi0xMS45LDBjLTAuNCwwLjMtMC44LDAuNS0xLjIsMC44Yy0xLjQtMC45LTIuNy0xLjgtMy44LTIuNWMtMC44LTIuNy0xLjYtNS4yLTIuNC04LjJjLTEuMiwxLjMtMS45LDIuMi0zLDMuNGMwLDEsMCwyLjUsMCwzLjljLTUuMSwwLjYtOS45LDIuMS0xNS4xLDAuOWMwLTEsMC0xLjcsMC0yLjljLTEuMSwwLjUtMS45LDAuOS0yLjcsMS4zYy0xLjYtMC42LTMuMS0xLjItNC44LTEuOWMtMC42LDAuOC0xLjIsMS44LTEuOSwyLjhjLTAuNC0wLjktMC44LTEuNy0xLjItMi40YzAuMi0wLjQsMC40LTAuOSwxLjEtMi4yYy0zLDEuNS01LDIuNS03LjEsMy42Yy0xLTMtMy40LTQuNS02LTUuN2MtMC41LDAuNi0xLjEsMS4xLTEuNSwxLjZjMC41LDAuOSwwLjgsMS41LDEuMSwyLjJjLTAuOCwwLTEuMSwwLTEuNywwYy0wLjItMS0wLjQtMi0wLjctMy41Yy0xLjMsMC45LTIuMywxLjYtMy4zLDIuM2MtMC4yLTAuNi0wLjUtMS4yLTAuOC0yYy0xLjEsMS41LTIuMSwyLjktMyw0LjJjLTUuMywwLjQtNS45LTUtOS4xLTYuOWMtMC43LDEtMS40LDItMiwzYy0xLjgtMC40LTMuMy0wLjgtNC44LTEuMWMtMC4yLDAtMC40LDAuMy0wLjYsMC41YzAuMywwLjMsMC42LDAuNiwxLDFjLTAuOCwwLjYtMS42LDEuMS0yLjUsMS43Yy0wLjUtMS0wLjgtMS42LTEuMi0yLjVjLTEuNSwwLjgtMi44LDEuNi0zLjgsMi4yYy0wLjcsMS43LTEuMiwyLjktMS42LDQuMWMtMS40LTEuNy0yLjYtMy4yLTQuMS01YzAtMC40LDAtMS4yLDAtMS45Yy0xLjcsMC0zLjEsMC0zLjksMGMtMy4xLDEuOS01LjYsMy40LTguMiw1LjFjLTAuNC0wLjgtMC43LTEuNS0xLjEtMi4yYy0wLjYsMC0xLjMsMC0yLjEsMGMtMC42LDAuNi0xLjMsMS4zLTIsMS45Yy0wLjUtMC40LTEtMC43LTEuOC0xLjNjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMi0wLjQsMC4xLTAuNywwLjJjLTAuMi0xLTAuNC0xLjktMC42LTMuMmMtMC41LDEtMC44LDEuNy0xLjUsMy4zYzAtMi4yLDAtMy40LDAtMy41Yy0xLjktMS45LTMuMS0zLjEtNC4zLTQuM2MtMy41LDEuMS0zLDUuNC00LjgsNy42Yy00LjgsMC41LTkuMywwLjktMTMuOCwxLjRjLTAuMS0xLjEtMC4yLTEuOS0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS40LDAuNy0yLjgsMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjQtMC45LTIuM2MtNi43LDAuNi0xMi41LDQuNC0xOSw2LjNjLTAuOS0xLjItMS45LTIuMy0yLjYtMy4zYy0zLDEuOC01LjYsMy4xLTguNywxLjJjLTAuNSwxLTEuMSwxLjktMS42LDIuN2MtMi43LDAuOC0zLjMtMS4yLTQtMi43Yy0yLjIsMC40LTQuMiwwLjctNS45LDFjLTAuOS0wLjktMS41LTEuNS0yLjEtMi4xYy0xLjIsMC42LTUuOSwxLjEtNi44LDEuMmMtMi41LDAuMi00LjksMC42LTguMSwxYy0wLjIsMC40LTAuNywxLjMtMS4xLDJjLTItMC42LTMuNS0xLjEtNS4zLTEuNmMtMC42LDAuOC0xLjEsMS42LTIuMSwyLjljLTAuNy0xLjktMS4yLTMuMi0xLjctNC44Yy0xLDEuMi0xLjgsMi40LTIuMywzYy0xLjgsMC0zLDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjNjLTIsMC4zLTQuMSwwLTUuNSwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNi0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMSwwLjktMS45LDEuMy0yLjljLTAuOS0wLjctMS42LTEuMi0yLjgtMi4xYy0xLjYsMy4xLTMsNS44LTQuNCw4LjVjLTEsMC0yLDAtMywwYy0wLjEtMC4zLTAuMi0wLjgtMC40LTAuOGMtMS44LTAuNC00LTAuMy01LjQtMS4zYy0xLjgtMS4zLTQuMywwLTUuOC0xLjlDMTAuOSw0NC4xLDUuNiw0Mi45LDAsNDEuN2MwLTguMSwwLTE2LjYsMC0yNS4yYzEtMC45LDIuMy0xLjcsMS44LTMuOGMtMC42LTAuNy0wLjYtMS41LTEuNS0yLjZDMS45LDguMSwyLjYsNiw0LjQsMy44YzEuMywwLjYsMi41LDEuMSwzLjcsMS42QzcuNSw4LDcuOCwxMC4yLDkuMywxMi4yYzAuNiwwLDEuMywwLDIuNCwwYzAuNy0wLjgsMS42LTIsMi43LTMuNGMwLjQsMS4xLDAuNiwxLjcsMC44LDIuMmMyLjYsMCw1LjEsMCw3LjksMGMwLTEuNCwwLTIuNSwwLTMuNWMxLTAuNCwxLjgtMC43LDIuOC0xLjJjMi4yLDEuOSw0LjYsMy45LDYuNyw1LjhjMS4yLDAsMi4xLDAsMi41LDBjMS4zLTEuNiwyLjMtMi43LDMuMy0zLjljMC41LDAuOSwwLjksMS42LDEuNiwyLjZjMS0xLjUsMS42LTIuNSwyLjMtMy41YzIuOSwwLDMtMC4xLDUuNSwxLjJjNC4xLDIuMiw4LjYsMi40LDEyLjcsMS4zYzMuMi0wLjgsNi4xLTAuMyw5LjItMC42YzMuMi0wLjQsNi4zLDAuMiw5LjQsMS41YzIuNywxLjEsNS41LDEsNy43LTAuOWMyLjctMi4zLDUuNC00LjQsOC42LTUuM2MxLjIsMC40LDIuMywwLjcsNCwxLjJjMC42LDEuNiwxLjQsMy40LDIuMiw1LjVjMC42LTEsMS4zLTIsMS43LTIuN2MxLjUtMC41LDIuOS0wLjksNC4xLTEuM2MwLjYsMS40LDEuMiwyLjcsMiw0LjRjMi42LTYuMiw4LTYuOSwxMy4yLTguNWMyLjEsMy40LDQuMiw2LjksNi42LDEwLjdjMS0xLjksMS42LTMuMywyLjMtNC42YzAuNywwLDEuNCwwLDIsMGMtMC4zLTAuMy0wLjYtMC42LTAuOS0xYzAuOC0wLjEsMS43LTAuMywyLjUtMC40Yy0wLjEtMC4yLTAuMy0wLjQtMC40LTAuNWMtMS41LDAtMi45LDAtNCwwYy0wLjgtMC43LTEuMy0xLjEtMS40LTEuMmMwLjQtMS44LDAuNy0zLjMsMS00LjdjMC45LDAsMS43LDAsMi40LDBjMC4yLDAuNywwLjQsMS4zLDAuNSwxLjZjMi4xLDAuNiwzLjksMS4xLDUuNSwxLjZjMC4yLDAuNywwLjUsMS4yLDAuNywxLjhjMS4yLTAuNSwyLjQtMC43LDMuMi0xLjRjMS40LTEuMiwyLjUtMi42LDMuOS00LjJjMC42LDIuNCwxLjEsNC4zLDEuNiw2LjNjLTIuNCwwLjEtNC4zLDAuMi02LjMsMC40YzAuNiwwLjcsMC45LDEsMS4xLDEuNWMwLjIsMC40LDAuMiwwLjksMC4zLDEuM2MxLjYtMC4xLDMsMC40LDQuMy0wLjljMC43LTAuNywyLTAuOCwzLTFjMC40LTAuMSwwLjksMC4yLDEuMiwwLjJjMC4yLDEuMSwwLjMsMS45LDAuNiwzLjRjMS4zLTEuMSwyLjItMS44LDMuMy0yLjdjMC44LDEuMSwxLjcsMi4yLDIuMSwyLjhjMy40LDEsMy44LTEuMyw0LjktMy40YzAuOSwxLjMsMS40LDIsMi4xLDMuMWMxLTAuOSwxLjgtMS43LDIuNi0yLjRjMC4zLDAuNywwLjcsMS40LDEsMi4xYzEuNC0wLjQsMi41LTEsMi40LTIuNmMxLjYsMC4xLDEuOC0xLjUsMi42LTIuN2MwLjQsMS4xLDAuNiwxLjcsMC43LDJjMi4xLTEuMiw0LjEtMi40LDYuMi0zLjdjMC4zLDAuMywwLjcsMC42LDEuMiwxYzAuNy0xLDEuMy0yLDEuOS0zYzEuNywwLDMuMywwLDUuMiwwYzAuNSwwLjksMS4xLDEuOCwxLjYsMi42YzUtMS42LDkuOC0wLjUsMTQuNSwxLjdjMC41LDEuNSwxLjEsMywxLjgsNS4yYzEuNy0zLjYsMy4yLTYuNiw0LjYtOS41YzIsMS42LDQsMC42LDUuOSwxYzIsMC40LDMuOSwwLjgsNiwxLjNjMCwxLjQsMCwyLjUsMCwzLjljMS41LTEuMSwyLjgtMiw0LTIuOWMwLjQtMC4yLDAuOS0wLjIsMS4yLTAuM2MwLjYsMS4xLDEuMiwyLDEuOCwzYzEuOSwwLDQsMC42LDUuNS0wLjFjMi45LTEuMyw1LjgtMC42LDktMWMwLjQsMC41LDAuOSwxLjIsMS41LDEuN2MwLjcsMC42LDEuNSwxLDIuOCwxLjljMC0yLjYsMC00LjUsMC02LjVjMS44LDAsMy4zLDAsNC41LDBjMi44LDEuNCwwLjgsNC4xLDIuMiw2LjJjMS44LTAuOCwzLjYtMS42LDUuMi0yLjNjMC4yLTEuNCwwLjQtMi4yLDAuNS0yLjljMy42LDAuNiw2LjgsMS40LDEwLjEsMS43YzIuMSwwLjIsNC4xLDAuMyw1LjgsMS43YzEuMiwxLDIuNiwxLjYsNC4xLDIuNWM1LjgtMS44LDEwLjYtNi43LDE2LjktNi4xYzEuOCwxLjMsMy4yLDIuMiw0LjYsMy4zYzEuNCwxLjEsMi42LDIuMyw0LjQsMy44YzAsMC4yLDAsMSwwLDEuOWMxLjgtMC44LDIuNC0yLjcsNC4zLTMuMWMxLjYtMC4zLDIuOS0xLjgsNC41LTIuOWMxLjIsMC4xLDIuNywwLjIsNC4zLDAuM2MtMC41LDEuMS0wLjgsMS45LTEuMywzLjFjMi0wLjksMy40LTEuNSw0LjctMi4xYzAuMywwLjgsMC41LDEuMywwLjgsMmMwLjktMC40LDEuNS0wLjcsMi4yLTEuMWMwLjIsMC42LDAuNCwxLjIsMC43LDEuOWMxLjgtMC4zLDMuNywwLjQsNS4zLTAuOGMwLjMsMC4zLDAuNiwwLjUsMC45LDAuOGMwLjctMSwxLjQtMi4xLDIuMS0zLjFjMC4yLDAsMC40LTAuMSwwLjUsMGMwLjUsMC4zLDEuMSwwLjcsMSwwLjZjMi45LTAuMyw1LjItMC41LDcuNS0wLjhjMC4yLDEuMywwLjQsMi4yLDAuNiwzLjRjMy01LjgsMTAuNS01LjksMTMuOC0zLjZjMC44LDEuMiwxLjUsMi4zLDIuMSwzLjFjMS41LDAsMi42LDAsMy44LDBjLTAuNy0xLjMtMS4zLTIuMy0xLjktMy40YzEuMS0wLjUsMi4yLTEuMSwzLjYtMS43YzAuMywxLjMsMC41LDIuMywwLjYsMi45YzAuOSwwLjUsMS40LDAuNywyLDFjLTAuNiwxLjEtMSwxLjktMS41LDNjMS40LDAuOSwyLjcsMS42LDQuMSwyLjRjMC43LTEuMSwxLjItMiwxLjgtMi45YzAuMiwxLjYsMCwzLjYtMC41LDQuOWMtMC4xLDAuMiwwLjIsMC42LDAuMywwLjljMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjJjMC4zLDAsMC42LTAuMSwwLjktMC4yYzAuNi0yLjksMC42LTIuOSwzLjMtNC41Yy0wLjQtMS0wLjctMS45LTEuMy0zLjNjMS4xLDAsMS43LTAuMSwyLjQsMGMwLjYsMC4xLDEuMiwwLjMsMS44LDAuNGM0LjgsMC44LDkuNCw0LDE0LjcsMS4yYzEsMS4yLDEuOSwyLjQsMi43LDMuM2MyLjYsMC4yLDMuOS0wLjcsMy43LTMuM2MtMC42LTAuOC0xLjQtMS43LTIuMy0yLjhjMS43LTIuMiwzLjMtNC4xLDUtNi4yYzEuMywwLjYsMi4zLDEsMi44LDEuM2MwLjcsMi44LDEuMiw1LDEuNyw3YzMuMSwwLjksMy43LTIsNS42LTIuN2MwLjMsMC43LDAuNSwxLjMsMC42LDEuN2MyLjYsMCw1LjEsMCw3LjcsMGMwLTEuMywwLTIuNCwwLTMuNGMxLTAuNSwxLjgtMC45LDMtMS41YzIuMSwxLjksNC40LDQsNi42LDZjMSwwLDIsMCwyLjYsMGMxLjItMS41LDIuMi0yLjcsMy4xLTMuOWMwLjgsMC45LDEuMywxLjUsMS45LDIuMmMwLjktMS40LDEuNS0yLjQsMi4zLTMuN2MxLjgsMC42LDMuNiwwLjgsNSwxLjZjNC4xLDIuNCw4LjUsMi4yLDEyLjgsMS42YzYuNi0wLjksMTIuNS0xLjQsMTcuMiwwLjJjMi4zLDAuOCw0LjYsMS4yLDYuNiwwLjljNC0yLjUsNy42LTQuOCwxMC42LTYuOGMyLDAuNiwzLjIsMC45LDQuNSwxLjNjMC43LDEuOCwxLjUsMy42LDIuMyw1LjZjMC43LTEuMSwxLjItMiwxLjgtMi45YzEuNC0wLjQsMi44LTAuOSw0LjEtMS4yYzAuNiwxLjUsMS4xLDIuOCwxLjgsNC41YzIuNy02LjMsOC4yLTcuMSwxMy41LTguNWMyLDMuNCw0LDYuOCw2LjQsMTAuN2MwLjktMS45LDEuNi0zLjMsMi4xLTQuM2MxLjQtMC42LDIuNi0xLjIsNC44LTIuMWMtMy0wLjgtNS41LDAuNi02LjctMS40YzAuNC0xLjgsMC43LTMuMywxLTQuOWMwLjgsMCwxLjYsMCwyLjUsMGMwLjEsMC41LDAuMiwxLDAuMywxLjZjMS44LDAuNSwzLjgsMS4xLDUuNywxLjZjMC4zLDAuNiwwLjUsMS4zLDEsMi4zYzIuNi0yLDQuOC0zLjcsNy01LjRjMC41LDEuOSwwLjksMy43LDEuNSw1LjljLTIuMywwLTQuMywwLTYuMiwwYzAuNSwxLjEsMC45LDEuOSwxLjMsMi44YzIuNCwwLjYsNC4zLTAuMyw2LjEtMS43YzAuNS0wLjQsMS41LTAuMSwyLjMtMC4xYzAuMiwxLjIsMC40LDIuMSwwLjcsMy40YzEuMy0wLjksMi4yLTEuNiwzLjctMi43YzAuOSwxLDEuOSwyLjEsMywzLjNjMS45LDAuMiwyLjctMS4xLDMuMS0yLjdjMC0wLjIsMC42LTAuMiwxLjEtMC4zYzAuMiwwLjMsMC40LDAuNiwwLjcsMWMwLjMsMC40LDAuNiwwLjksMS40LDIuMWMwLjktMS4zLDEuNC0yLjEsMi0zYzAsMCwwLjIsMC4xLDAuMywwLjJjMC4yLDAuNiwwLjQsMS4yLDAuNiwxLjhjMS43LTAuOSwzLjctMi43LDUuMy00LjljMC4yLDAuNiwwLjUsMS4xLDAuNiwxLjZjMi4xLTEuMiw0LjItMi40LDYuMi0zLjdjMC40LDAuMywwLjcsMC42LDEuMiwxYzAuNi0xLjEsMS4yLTIsMS43LTIuOWMxLjgsMCwzLjYsMCw1LjQsMGMwLjYsMSwxLjEsMS45LDEuNCwyLjNjNS4yLTEsMTAtMC42LDE0LjcsMi4xYzAuNSwxLjMsMSwyLjksMS43LDUuMWMxLjctMy41LDMuMS02LjUsNC42LTkuNmMwLjQsMC4zLDAuNiwwLjcsMC44LDAuN2MyLjQsMC4yLDQuOSwwLjQsNi44LDAuNWMxLjcsMC41LDIuOCwwLjksNCwxLjNjMC4xLDEuMiwwLjMsMi40LDAuNCwzLjdjMS45LTEuMiwzLjQtMi4zLDUtMy4zYzAuOCwxLjMsMS41LDIuMywyLjIsMy40YzQuOC0wLjUsOS41LTEsMTMuNy0xLjRjMS43LDEuNCwyLjksMi41LDQuNyw0LjFjMC4xLTIuNCwwLjEtNCwwLjItNS42YzAtMC40LDAuMi0wLjksMC40LTEuM2MxLjUsMCwyLjgsMCw0LjEsMGMwLjUsMC41LDEsMSwxLjYsMS42YzAsMS4zLDAsMi43LDAsNC4yYzIuNSwwLjYsNC4xLTAuNiw1LjctMi4xYzAuMi0wLjksMC4zLTEuOCwwLjUtMi44YzQuNSwxLjIsOC44LDIuNCwxMy4yLDJjMi4zLDEuNCw0LjQsMi43LDcsNC4yYzIuMy0xLjEsNS0yLjQsNy42LTMuN2MzLTEuNSw2LTIuOSw5LjQtMi41YzIuOSwyLjIsNS43LDQuNSw4LjUsNi43YzAuMSwwLjgsMC4yLDEuNSwwLjMsMmMyLjktMiw1LjctMy44LDguMy01LjZjMS41LDAsMywwLDQuNiwwYy0wLjEsMC43LTAuMiwxLjEtMC40LDEuNmMtMC4xLDAuMy0wLjQsMC42LTEuNCwxLjljMi42LTEuMiw0LTEuOCw1LjQtMi41YzAuMiwwLjcsMC40LDEuMywwLjcsMi4xYzAuOC0wLjUsMS41LTAuOCwyLjItMS4yYzAuMiwwLjYsMC40LDEuMSwwLjYsMS43YzIuMiwxLjEsNC4zLTEsNi42LDBjMC42LTEsMS4zLTIsMi0zYzAuOSwwLjUsMS42LDAuOSwyLjIsMS4zYzIuMy0xLjYsNC42LTEuMSw3LjEtMC45YzAsMS4xLDAsMS45LDAsMi43YzEuMi0zLDMuNi0zLjcsNi40LTMuOWMyLjctMi43LDUsMC42LDcuMywwLjJjMC45LDEuNSwxLjcsMi43LDIuMywzLjdjMS40LDAsMi41LDAsMy43LDBjLTAuNi0xLjMtMS4yLTIuNC0xLjgtMy42YzEuMy0wLjUsMi40LTEsMy42LTEuNWMwLjIsMS4zLDAuMywyLjIsMC41LDIuOWMwLjgsMC4zLDEuMywwLjUsMi4xLDAuOGMtMC41LDEuMS0wLjksMS45LTEuNSwzYzEuMywwLjksMi42LDEuNywzLjksMi41YzAuNy0xLDEuMy0yLDEuOS0yLjljMC4yLDAuMSwwLjQsMC4yLDAuNiwwLjNjLTAuMywxLjgtMC42LDMuNi0xLDUuNWMwLjUsMC4xLDAuOSwwLjEsMS40LDAuMmMwLjQtMS4xLDAuNS0yLjMsMS4xLTMuMWMwLjYtMC44LDEuNi0xLjIsMi41LTEuN2MtMC41LTEuMS0wLjktMS45LTEuMy0yLjljMy4xLTEsNS41LDAuNyw4LjEsMS4xYzEuOCwwLjMsMy41LDEuNCw1LjMsMS41YzEuNywwLjEsMy40LTAuNiw1LjEtMC45YzEuNywwLjgsMi4yLDMuNCw0LjcsM2MwLDguNywwLDE3LjMsMCwyNmMtMi4zLDAtNC42LDAtNi43LDBjLTAuMywwLjktMC41LDEuNC0wLjcsMmMtMC41LTAuNC0wLjgtMC43LTEuNC0xLjFjLTAuMiwxLjEtMC4zLDItMC40LDIuN2MtMC42LTAuNi0xLjMtMS4zLTEuOC0xLjhjLTMsMC4yLTUuNSwwLTcuOCwwLjVjLTUuMSwxLjItNy4xLDAuNS05LjUtNC4xYy0yLjcsMS01LjIsMS4xLTcuOSwwLjFjLTAuNy0wLjMtMS42LTAuNS0yLjMtMC4zYy0xLjUsMC41LTIuOCwxLjMtNC4yLDEuOWMtMC4zLDAuMS0wLjktMC4yLTEuNC0wLjNjMC40LTEuMiwwLjgtMi4zLDEuNS00LjRjLTMuNywyLjMtNi41LDMuOS05LjYsNS45Yy00LjctMC40LTguMy0zLjktMTIuOC02LjJjLTEuOCwwLTMuOCwwLTUuMywwYy0wLjgtMS4xLTEuNS0yLTIuNy0zLjZjMCwyLjEsMCwzLjIsMCw0LjNjLTMuOCwxLjYtNy42LDIuNC0xMC44LDIuM2MtMS4xLTEuMy0yLjMtMi43LTMuNi00LjNjLTEsMS44LTAuNCw0LjItMy40LDQuNWMtMi45LTEuMi02LjMtMi43LTkuOS00LjJjLTEuNiwyLTMuMiw0LTUsNi4zYy00LTEuNS04LDEuOC0xMi4xLDAuMmMtMC41LDAuMy0wLjksMC41LTEuMywwLjdjLTEuNC0xLTIuNy0xLjgtMy42LTIuNWMtMC45LTIuOC0xLjctNS4yLTIuNS03LjljLTEuMiwxLjItMiwyLTMsM2MwLDEuMywwLDIuOCwwLDQuMWMtNSwwLjUtOS43LDItMTQuNiwwLjljLTAuMi0wLjktMC4zLTEuOC0wLjYtM2MtMS4xLDAuNS0xLjksMC45LTIuNiwxLjNjLTEuNy0wLjYtMy4yLTEuMi00LjktMS44Yy0wLjUsMC45LTEuMSwxLjgtMS43LDIuOGMtMC40LTAuOS0wLjktMS44LTEuMi0yLjRjMC4yLTAuNywwLjMtMS4xLDAuNy0yLjFjLTIuNywxLjQtNC43LDIuNC02LjcsMy40Yy0xLjgtMy4zLTQuOC02LjEtNi4xLTUuNmMtMC40LDAuNC0wLjksMC45LTEuMywxLjVjMC4zLDAuNywwLjYsMS4zLDEuMSwyLjNjLTAuOC0wLjEtMS4zLTAuMS0xLjgtMC4xYy0wLjItMS4yLTAuMy0yLTAuNi0zLjVjLTEuNCwxLjEtMi4zLDEuOC0zLjMsMi41Yy0wLjMtMC44LTAuNS0xLjMtMC44LTIuMmMtMS4xLDEuNi0yLjEsMi45LTMuMSw0LjRjLTIuMy0wLjgtNC43LTAuOC01LjYtMy44Yy0wLjUtMS40LTIuMS0yLjMtMy4xLTMuNGMtMC44LDEuMS0xLjUsMi4xLTIuMiwzLjFjLTEuOS0wLjUtMy41LTAuOS01LjUtMS40YzAuNSwxLDAuNywxLjQsMSwyYy0wLjgsMC41LTEuNiwwLjktMi40LDEuM2MtMC40LTEtMC43LTEuNi0xLjEtMi40Yy0xLjUsMC44LTIuNywxLjQtMy44LDJjLTAuNywxLjYtMS4yLDMtMS44LDQuM2MtMS40LTEuOC0yLjYtMy4zLTMuOC00LjhjLTAuMS0wLjctMC4xLTEuNS0wLjItMi4xYy0xLjgsMC0zLjMsMC00LDBjLTMuMSwxLjktNS42LDMuNC04LjMsNWMtMC40LTAuOC0wLjctMS41LTEuMy0yLjZjLTEuNCwwLjctMi43LDEuNC00LjEsMi4xYy0wLjMtMC4yLTAuOS0wLjUtMS42LTFjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMi0xLTAuMy0xLjgtMC41LTMuMWMtMC41LDEuMS0wLjgsMS43LTEuNiwzLjNjMC0yLjIsMC0zLjUsMC00LjdjLTAuMywwLjItMC42LDAuMy0wLjgsMC41Yy0xLjEtMS4yLTIuMy0yLjMtMy42LTMuNmMtMy4zLDEuMi0yLjksNS40LTQuNyw3LjZjLTQuOSwwLjUtOS4zLDAuOS0xMy44LDEuNGMtMC4xLTEuMi0wLjItMi0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS41LDAuNy0yLjksMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjUtMC45LTIuNGMtNi43LDEtMTIuNSw0LjQtMTkuMSw2LjZjLTAuOS0xLjItMS45LTIuNC0yLjYtMy40Yy0yLjksMS45LTUuNSwyLjktOC43LDEuMmMtMC41LDAuOS0xLjEsMS45LTEuNiwyLjhjLTAuNywwLTEuMywwLTIuMiwwYy0wLjYtMC45LTEuMy0yLTEuOC0yLjhjLTIuMSwwLjMtNC4xLDAuNy01LjgsMC45Yy0wLjktMC45LTEuNS0xLjUtMi4xLTIuMWMtMS4zLDAuNi01LjgsMS4xLTYuOCwxLjJjLTIuNSwwLjItNC45LDAuNi04LjEsMWMtMC4yLDAuNC0wLjYsMS4zLTEsMmMtMi0wLjYtMy41LTEuMS01LjMtMS42Yy0wLjYsMC44LTEuMSwxLjYtMiwzYy0wLjctMi0xLjItMy4zLTEuNy00LjdjLTEsMS4xLTEuOSwyLjItMi40LDIuOGMtMS45LDAtMi45LDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjRjLTIsMC4zLTQuMSwwLTUuNiwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNS0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMC45LDAuOS0xLjksMS4zLTIuOWMtMC45LTAuNy0xLjYtMS4yLTIuOC0yLjFDNDMzLjgsNDMuOCw0MzIuNCw0Ni41LDQzMC45LDQ5LjJ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=);
		background-position: bottom;
		background-repeat: repeat-x;
		background-size: auto 0.25em;
		padding-bottom: 0.25em;
		color: inherit;
		text-decoration: none;
		transition: background-size ease-in-out 200ms;

		&:hover,
		&:active,
		&:focus {
			background-size: auto 0.325em;
		}
	}

	ul ul {
		padding-left: 2em;
	}

	ul {
		padding-left: 2em;
	}

	ul > li {
		list-style: outside;
	}

	ul > ul > li {
		list-style: circle;
	}

	p {
		text-indent: 2em;
	}

	strong {
		font-weight: 800;
	}

	i {
		font-family: ${theme.font};
		font-weight: 400;
		font-style: italic;
	}

	s,
	strike {
		background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJCS5zdDB7ZmlsbDojQ0MwMDAwO30NCgk8L3N0eWxlPg0KCTxnIGlkPSJZMkJjMjcudGlmIj4NCgkJPGc+DQoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDMwLjksNDkuMmMtMSwwLTIsMC0zLDBjLTAuMS0wLjMtMC4yLTAuOC0wLjQtMC44Yy0xLjgtMC40LTQtMC4zLTUuNC0xLjNjLTEuOC0xLjQtNC4zLDAuMS01LjgtMS45Yy00LjMtMS04LjUtMi4zLTEyLjgtMi45Yy0zLjQtMC41LTYuOS0wLjEtMTAuMy0wLjFjLTAuMywwLjgtMC41LDEuNC0wLjcsMmMtMC41LTAuMy0wLjktMC42LTEuNC0xYy0wLjIsMS4yLTAuMywyLjEtMC42LDMuN2MtMS0xLjMtMS41LTIuMS0xLjktMi42Yy0yLjgsMC01LjMtMC41LTcuNCwwLjFjLTIuMiwwLjctMy43LDAuOC01LjktMC4xYy0yLjItMC45LTIuOS0yLjYtNC00Yy0yLjUsMS4yLTUuMSwxLjEtNy41LDAuMmMtMS4yLTAuNS0yLTAuNi0zLjEsMC4xYy0xLjIsMC43LTIuNiwxLTMuOSwxLjRjLTAuMiwwLjEtMC42LTAuMi0wLjgtMC4zYy0xLjItMS4zLDIuNC0yLjMsMC0zLjdjLTIuNiwxLjYtNS4yLDMuMy04LDVjLTAuOCwwLTEuOSwwLjMtMi43LTAuMWMtMi40LTEuMS00LjgtMi4zLTYuOS0zLjljLTEuOS0xLjUtMy45LTIuMi02LjItMmMtMSwwLjEtMiwwLTIuOCwwYy0wLjgtMS4xLTEuNC0yLTIuNy0zLjljMCwyLjMsMCwzLjYsMCw0LjljLTMuNywwLjgtNywxLjYtMTAuMywyLjNjLTEuNC0xLjgtMi42LTMuMi0zLjktNC45Yy0wLjQsMC44LTAuNiwxLjItMC43LDEuNmMtMC44LDMuMi0xLDMuMS00LjIsMi4zYy0yLjktMC43LTUuNC0yLjQtOC40LTMuNmMtMS42LDItMy4yLDQtNS4yLDYuNWMtMy44LTIuMi03LjgsMi0xMS45LDBjLTAuNCwwLjMtMC44LDAuNS0xLjIsMC44Yy0xLjQtMC45LTIuNy0xLjgtMy44LTIuNWMtMC44LTIuNy0xLjYtNS4yLTIuNC04LjJjLTEuMiwxLjMtMS45LDIuMi0zLDMuNGMwLDEsMCwyLjUsMCwzLjljLTUuMSwwLjYtOS45LDIuMS0xNS4xLDAuOWMwLTEsMC0xLjcsMC0yLjljLTEuMSwwLjUtMS45LDAuOS0yLjcsMS4zYy0xLjYtMC42LTMuMS0xLjItNC44LTEuOWMtMC42LDAuOC0xLjIsMS44LTEuOSwyLjhjLTAuNC0wLjktMC44LTEuNy0xLjItMi40YzAuMi0wLjQsMC40LTAuOSwxLjEtMi4yYy0zLDEuNS01LDIuNS03LjEsMy42Yy0xLTMtMy40LTQuNS02LTUuN2MtMC41LDAuNi0xLjEsMS4xLTEuNSwxLjZjMC41LDAuOSwwLjgsMS41LDEuMSwyLjJjLTAuOCwwLTEuMSwwLTEuNywwYy0wLjItMS0wLjQtMi0wLjctMy41Yy0xLjMsMC45LTIuMywxLjYtMy4zLDIuM2MtMC4yLTAuNi0wLjUtMS4yLTAuOC0yYy0xLjEsMS41LTIuMSwyLjktMyw0LjJjLTUuMywwLjQtNS45LTUtOS4xLTYuOWMtMC43LDEtMS40LDItMiwzYy0xLjgtMC40LTMuMy0wLjgtNC44LTEuMWMtMC4yLDAtMC40LDAuMy0wLjYsMC41YzAuMywwLjMsMC42LDAuNiwxLDFjLTAuOCwwLjYtMS42LDEuMS0yLjUsMS43Yy0wLjUtMS0wLjgtMS42LTEuMi0yLjVjLTEuNSwwLjgtMi44LDEuNi0zLjgsMi4yYy0wLjcsMS43LTEuMiwyLjktMS42LDQuMWMtMS40LTEuNy0yLjYtMy4yLTQuMS01YzAtMC40LDAtMS4yLDAtMS45Yy0xLjcsMC0zLjEsMC0zLjksMGMtMy4xLDEuOS01LjYsMy40LTguMiw1LjFjLTAuNC0wLjgtMC43LTEuNS0xLjEtMi4yYy0wLjYsMC0xLjMsMC0yLjEsMGMtMC42LDAuNi0xLjMsMS4zLTIsMS45Yy0wLjUtMC40LTEtMC43LTEuOC0xLjNjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMi0wLjQsMC4xLTAuNywwLjJjLTAuMi0xLTAuNC0xLjktMC42LTMuMmMtMC41LDEtMC44LDEuNy0xLjUsMy4zYzAtMi4yLDAtMy40LDAtMy41Yy0xLjktMS45LTMuMS0zLjEtNC4zLTQuM2MtMy41LDEuMS0zLDUuNC00LjgsNy42Yy00LjgsMC41LTkuMywwLjktMTMuOCwxLjRjLTAuMS0xLjEtMC4yLTEuOS0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS40LDAuNy0yLjgsMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjQtMC45LTIuM2MtNi43LDAuNi0xMi41LDQuNC0xOSw2LjNjLTAuOS0xLjItMS45LTIuMy0yLjYtMy4zYy0zLDEuOC01LjYsMy4xLTguNywxLjJjLTAuNSwxLTEuMSwxLjktMS42LDIuN2MtMi43LDAuOC0zLjMtMS4yLTQtMi43Yy0yLjIsMC40LTQuMiwwLjctNS45LDFjLTAuOS0wLjktMS41LTEuNS0yLjEtMi4xYy0xLjIsMC42LTUuOSwxLjEtNi44LDEuMmMtMi41LDAuMi00LjksMC42LTguMSwxYy0wLjIsMC40LTAuNywxLjMtMS4xLDJjLTItMC42LTMuNS0xLjEtNS4zLTEuNmMtMC42LDAuOC0xLjEsMS42LTIuMSwyLjljLTAuNy0xLjktMS4yLTMuMi0xLjctNC44Yy0xLDEuMi0xLjgsMi40LTIuMywzYy0xLjgsMC0zLDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjNjLTIsMC4zLTQuMSwwLTUuNSwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNi0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMSwwLjktMS45LDEuMy0yLjljLTAuOS0wLjctMS42LTEuMi0yLjgtMi4xYy0xLjYsMy4xLTMsNS44LTQuNCw4LjVjLTEsMC0yLDAtMywwYy0wLjEtMC4zLTAuMi0wLjgtMC40LTAuOGMtMS44LTAuNC00LTAuMy01LjQtMS4zYy0xLjgtMS4zLTQuMywwLTUuOC0xLjlDMTAuOSw0NC4xLDUuNiw0Mi45LDAsNDEuN2MwLTguMSwwLTE2LjYsMC0yNS4yYzEtMC45LDIuMy0xLjcsMS44LTMuOGMtMC42LTAuNy0wLjYtMS41LTEuNS0yLjZDMS45LDguMSwyLjYsNiw0LjQsMy44YzEuMywwLjYsMi41LDEuMSwzLjcsMS42QzcuNSw4LDcuOCwxMC4yLDkuMywxMi4yYzAuNiwwLDEuMywwLDIuNCwwYzAuNy0wLjgsMS42LTIsMi43LTMuNGMwLjQsMS4xLDAuNiwxLjcsMC44LDIuMmMyLjYsMCw1LjEsMCw3LjksMGMwLTEuNCwwLTIuNSwwLTMuNWMxLTAuNCwxLjgtMC43LDIuOC0xLjJjMi4yLDEuOSw0LjYsMy45LDYuNyw1LjhjMS4yLDAsMi4xLDAsMi41LDBjMS4zLTEuNiwyLjMtMi43LDMuMy0zLjljMC41LDAuOSwwLjksMS42LDEuNiwyLjZjMS0xLjUsMS42LTIuNSwyLjMtMy41YzIuOSwwLDMtMC4xLDUuNSwxLjJjNC4xLDIuMiw4LjYsMi40LDEyLjcsMS4zYzMuMi0wLjgsNi4xLTAuMyw5LjItMC42YzMuMi0wLjQsNi4zLDAuMiw5LjQsMS41YzIuNywxLjEsNS41LDEsNy43LTAuOWMyLjctMi4zLDUuNC00LjQsOC42LTUuM2MxLjIsMC40LDIuMywwLjcsNCwxLjJjMC42LDEuNiwxLjQsMy40LDIuMiw1LjVjMC42LTEsMS4zLTIsMS43LTIuN2MxLjUtMC41LDIuOS0wLjksNC4xLTEuM2MwLjYsMS40LDEuMiwyLjcsMiw0LjRjMi42LTYuMiw4LTYuOSwxMy4yLTguNWMyLjEsMy40LDQuMiw2LjksNi42LDEwLjdjMS0xLjksMS42LTMuMywyLjMtNC42YzAuNywwLDEuNCwwLDIsMGMtMC4zLTAuMy0wLjYtMC42LTAuOS0xYzAuOC0wLjEsMS43LTAuMywyLjUtMC40Yy0wLjEtMC4yLTAuMy0wLjQtMC40LTAuNWMtMS41LDAtMi45LDAtNCwwYy0wLjgtMC43LTEuMy0xLjEtMS40LTEuMmMwLjQtMS44LDAuNy0zLjMsMS00LjdjMC45LDAsMS43LDAsMi40LDBjMC4yLDAuNywwLjQsMS4zLDAuNSwxLjZjMi4xLDAuNiwzLjksMS4xLDUuNSwxLjZjMC4yLDAuNywwLjUsMS4yLDAuNywxLjhjMS4yLTAuNSwyLjQtMC43LDMuMi0xLjRjMS40LTEuMiwyLjUtMi42LDMuOS00LjJjMC42LDIuNCwxLjEsNC4zLDEuNiw2LjNjLTIuNCwwLjEtNC4zLDAuMi02LjMsMC40YzAuNiwwLjcsMC45LDEsMS4xLDEuNWMwLjIsMC40LDAuMiwwLjksMC4zLDEuM2MxLjYtMC4xLDMsMC40LDQuMy0wLjljMC43LTAuNywyLTAuOCwzLTFjMC40LTAuMSwwLjksMC4yLDEuMiwwLjJjMC4yLDEuMSwwLjMsMS45LDAuNiwzLjRjMS4zLTEuMSwyLjItMS44LDMuMy0yLjdjMC44LDEuMSwxLjcsMi4yLDIuMSwyLjhjMy40LDEsMy44LTEuMyw0LjktMy40YzAuOSwxLjMsMS40LDIsMi4xLDMuMWMxLTAuOSwxLjgtMS43LDIuNi0yLjRjMC4zLDAuNywwLjcsMS40LDEsMi4xYzEuNC0wLjQsMi41LTEsMi40LTIuNmMxLjYsMC4xLDEuOC0xLjUsMi42LTIuN2MwLjQsMS4xLDAuNiwxLjcsMC43LDJjMi4xLTEuMiw0LjEtMi40LDYuMi0zLjdjMC4zLDAuMywwLjcsMC42LDEuMiwxYzAuNy0xLDEuMy0yLDEuOS0zYzEuNywwLDMuMywwLDUuMiwwYzAuNSwwLjksMS4xLDEuOCwxLjYsMi42YzUtMS42LDkuOC0wLjUsMTQuNSwxLjdjMC41LDEuNSwxLjEsMywxLjgsNS4yYzEuNy0zLjYsMy4yLTYuNiw0LjYtOS41YzIsMS42LDQsMC42LDUuOSwxYzIsMC40LDMuOSwwLjgsNiwxLjNjMCwxLjQsMCwyLjUsMCwzLjljMS41LTEuMSwyLjgtMiw0LTIuOWMwLjQtMC4yLDAuOS0wLjIsMS4yLTAuM2MwLjYsMS4xLDEuMiwyLDEuOCwzYzEuOSwwLDQsMC42LDUuNS0wLjFjMi45LTEuMyw1LjgtMC42LDktMWMwLjQsMC41LDAuOSwxLjIsMS41LDEuN2MwLjcsMC42LDEuNSwxLDIuOCwxLjljMC0yLjYsMC00LjUsMC02LjVjMS44LDAsMy4zLDAsNC41LDBjMi44LDEuNCwwLjgsNC4xLDIuMiw2LjJjMS44LTAuOCwzLjYtMS42LDUuMi0yLjNjMC4yLTEuNCwwLjQtMi4yLDAuNS0yLjljMy42LDAuNiw2LjgsMS40LDEwLjEsMS43YzIuMSwwLjIsNC4xLDAuMyw1LjgsMS43YzEuMiwxLDIuNiwxLjYsNC4xLDIuNWM1LjgtMS44LDEwLjYtNi43LDE2LjktNi4xYzEuOCwxLjMsMy4yLDIuMiw0LjYsMy4zYzEuNCwxLjEsMi42LDIuMyw0LjQsMy44YzAsMC4yLDAsMSwwLDEuOWMxLjgtMC44LDIuNC0yLjcsNC4zLTMuMWMxLjYtMC4zLDIuOS0xLjgsNC41LTIuOWMxLjIsMC4xLDIuNywwLjIsNC4zLDAuM2MtMC41LDEuMS0wLjgsMS45LTEuMywzLjFjMi0wLjksMy40LTEuNSw0LjctMi4xYzAuMywwLjgsMC41LDEuMywwLjgsMmMwLjktMC40LDEuNS0wLjcsMi4yLTEuMWMwLjIsMC42LDAuNCwxLjIsMC43LDEuOWMxLjgtMC4zLDMuNywwLjQsNS4zLTAuOGMwLjMsMC4zLDAuNiwwLjUsMC45LDAuOGMwLjctMSwxLjQtMi4xLDIuMS0zLjFjMC4yLDAsMC40LTAuMSwwLjUsMGMwLjUsMC4zLDEuMSwwLjcsMSwwLjZjMi45LTAuMyw1LjItMC41LDcuNS0wLjhjMC4yLDEuMywwLjQsMi4yLDAuNiwzLjRjMy01LjgsMTAuNS01LjksMTMuOC0zLjZjMC44LDEuMiwxLjUsMi4zLDIuMSwzLjFjMS41LDAsMi42LDAsMy44LDBjLTAuNy0xLjMtMS4zLTIuMy0xLjktMy40YzEuMS0wLjUsMi4yLTEuMSwzLjYtMS43YzAuMywxLjMsMC41LDIuMywwLjYsMi45YzAuOSwwLjUsMS40LDAuNywyLDFjLTAuNiwxLjEtMSwxLjktMS41LDNjMS40LDAuOSwyLjcsMS42LDQuMSwyLjRjMC43LTEuMSwxLjItMiwxLjgtMi45YzAuMiwxLjYsMCwzLjYtMC41LDQuOWMtMC4xLDAuMiwwLjIsMC42LDAuMywwLjljMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjJjMC4zLDAsMC42LTAuMSwwLjktMC4yYzAuNi0yLjksMC42LTIuOSwzLjMtNC41Yy0wLjQtMS0wLjctMS45LTEuMy0zLjNjMS4xLDAsMS43LTAuMSwyLjQsMGMwLjYsMC4xLDEuMiwwLjMsMS44LDAuNGM0LjgsMC44LDkuNCw0LDE0LjcsMS4yYzEsMS4yLDEuOSwyLjQsMi43LDMuM2MyLjYsMC4yLDMuOS0wLjcsMy43LTMuM2MtMC42LTAuOC0xLjQtMS43LTIuMy0yLjhjMS43LTIuMiwzLjMtNC4xLDUtNi4yYzEuMywwLjYsMi4zLDEsMi44LDEuM2MwLjcsMi44LDEuMiw1LDEuNyw3YzMuMSwwLjksMy43LTIsNS42LTIuN2MwLjMsMC43LDAuNSwxLjMsMC42LDEuN2MyLjYsMCw1LjEsMCw3LjcsMGMwLTEuMywwLTIuNCwwLTMuNGMxLTAuNSwxLjgtMC45LDMtMS41YzIuMSwxLjksNC40LDQsNi42LDZjMSwwLDIsMCwyLjYsMGMxLjItMS41LDIuMi0yLjcsMy4xLTMuOWMwLjgsMC45LDEuMywxLjUsMS45LDIuMmMwLjktMS40LDEuNS0yLjQsMi4zLTMuN2MxLjgsMC42LDMuNiwwLjgsNSwxLjZjNC4xLDIuNCw4LjUsMi4yLDEyLjgsMS42YzYuNi0wLjksMTIuNS0xLjQsMTcuMiwwLjJjMi4zLDAuOCw0LjYsMS4yLDYuNiwwLjljNC0yLjUsNy42LTQuOCwxMC42LTYuOGMyLDAuNiwzLjIsMC45LDQuNSwxLjNjMC43LDEuOCwxLjUsMy42LDIuMyw1LjZjMC43LTEuMSwxLjItMiwxLjgtMi45YzEuNC0wLjQsMi44LTAuOSw0LjEtMS4yYzAuNiwxLjUsMS4xLDIuOCwxLjgsNC41YzIuNy02LjMsOC4yLTcuMSwxMy41LTguNWMyLDMuNCw0LDYuOCw2LjQsMTAuN2MwLjktMS45LDEuNi0zLjMsMi4xLTQuM2MxLjQtMC42LDIuNi0xLjIsNC44LTIuMWMtMy0wLjgtNS41LDAuNi02LjctMS40YzAuNC0xLjgsMC43LTMuMywxLTQuOWMwLjgsMCwxLjYsMCwyLjUsMGMwLjEsMC41LDAuMiwxLDAuMywxLjZjMS44LDAuNSwzLjgsMS4xLDUuNywxLjZjMC4zLDAuNiwwLjUsMS4zLDEsMi4zYzIuNi0yLDQuOC0zLjcsNy01LjRjMC41LDEuOSwwLjksMy43LDEuNSw1LjljLTIuMywwLTQuMywwLTYuMiwwYzAuNSwxLjEsMC45LDEuOSwxLjMsMi44YzIuNCwwLjYsNC4zLTAuMyw2LjEtMS43YzAuNS0wLjQsMS41LTAuMSwyLjMtMC4xYzAuMiwxLjIsMC40LDIuMSwwLjcsMy40YzEuMy0wLjksMi4yLTEuNiwzLjctMi43YzAuOSwxLDEuOSwyLjEsMywzLjNjMS45LDAuMiwyLjctMS4xLDMuMS0yLjdjMC0wLjIsMC42LTAuMiwxLjEtMC4zYzAuMiwwLjMsMC40LDAuNiwwLjcsMWMwLjMsMC40LDAuNiwwLjksMS40LDIuMWMwLjktMS4zLDEuNC0yLjEsMi0zYzAsMCwwLjIsMC4xLDAuMywwLjJjMC4yLDAuNiwwLjQsMS4yLDAuNiwxLjhjMS43LTAuOSwzLjctMi43LDUuMy00LjljMC4yLDAuNiwwLjUsMS4xLDAuNiwxLjZjMi4xLTEuMiw0LjItMi40LDYuMi0zLjdjMC40LDAuMywwLjcsMC42LDEuMiwxYzAuNi0xLjEsMS4yLTIsMS43LTIuOWMxLjgsMCwzLjYsMCw1LjQsMGMwLjYsMSwxLjEsMS45LDEuNCwyLjNjNS4yLTEsMTAtMC42LDE0LjcsMi4xYzAuNSwxLjMsMSwyLjksMS43LDUuMWMxLjctMy41LDMuMS02LjUsNC42LTkuNmMwLjQsMC4zLDAuNiwwLjcsMC44LDAuN2MyLjQsMC4yLDQuOSwwLjQsNi44LDAuNWMxLjcsMC41LDIuOCwwLjksNCwxLjNjMC4xLDEuMiwwLjMsMi40LDAuNCwzLjdjMS45LTEuMiwzLjQtMi4zLDUtMy4zYzAuOCwxLjMsMS41LDIuMywyLjIsMy40YzQuOC0wLjUsOS41LTEsMTMuNy0xLjRjMS43LDEuNCwyLjksMi41LDQuNyw0LjFjMC4xLTIuNCwwLjEtNCwwLjItNS42YzAtMC40LDAuMi0wLjksMC40LTEuM2MxLjUsMCwyLjgsMCw0LjEsMGMwLjUsMC41LDEsMSwxLjYsMS42YzAsMS4zLDAsMi43LDAsNC4yYzIuNSwwLjYsNC4xLTAuNiw1LjctMi4xYzAuMi0wLjksMC4zLTEuOCwwLjUtMi44YzQuNSwxLjIsOC44LDIuNCwxMy4yLDJjMi4zLDEuNCw0LjQsMi43LDcsNC4yYzIuMy0xLjEsNS0yLjQsNy42LTMuN2MzLTEuNSw2LTIuOSw5LjQtMi41YzIuOSwyLjIsNS43LDQuNSw4LjUsNi43YzAuMSwwLjgsMC4yLDEuNSwwLjMsMmMyLjktMiw1LjctMy44LDguMy01LjZjMS41LDAsMywwLDQuNiwwYy0wLjEsMC43LTAuMiwxLjEtMC40LDEuNmMtMC4xLDAuMy0wLjQsMC42LTEuNCwxLjljMi42LTEuMiw0LTEuOCw1LjQtMi41YzAuMiwwLjcsMC40LDEuMywwLjcsMi4xYzAuOC0wLjUsMS41LTAuOCwyLjItMS4yYzAuMiwwLjYsMC40LDEuMSwwLjYsMS43YzIuMiwxLjEsNC4zLTEsNi42LDBjMC42LTEsMS4zLTIsMi0zYzAuOSwwLjUsMS42LDAuOSwyLjIsMS4zYzIuMy0xLjYsNC42LTEuMSw3LjEtMC45YzAsMS4xLDAsMS45LDAsMi43YzEuMi0zLDMuNi0zLjcsNi40LTMuOWMyLjctMi43LDUsMC42LDcuMywwLjJjMC45LDEuNSwxLjcsMi43LDIuMywzLjdjMS40LDAsMi41LDAsMy43LDBjLTAuNi0xLjMtMS4yLTIuNC0xLjgtMy42YzEuMy0wLjUsMi40LTEsMy42LTEuNWMwLjIsMS4zLDAuMywyLjIsMC41LDIuOWMwLjgsMC4zLDEuMywwLjUsMi4xLDAuOGMtMC41LDEuMS0wLjksMS45LTEuNSwzYzEuMywwLjksMi42LDEuNywzLjksMi41YzAuNy0xLDEuMy0yLDEuOS0yLjljMC4yLDAuMSwwLjQsMC4yLDAuNiwwLjNjLTAuMywxLjgtMC42LDMuNi0xLDUuNWMwLjUsMC4xLDAuOSwwLjEsMS40LDAuMmMwLjQtMS4xLDAuNS0yLjMsMS4xLTMuMWMwLjYtMC44LDEuNi0xLjIsMi41LTEuN2MtMC41LTEuMS0wLjktMS45LTEuMy0yLjljMy4xLTEsNS41LDAuNyw4LjEsMS4xYzEuOCwwLjMsMy41LDEuNCw1LjMsMS41YzEuNywwLjEsMy40LTAuNiw1LjEtMC45YzEuNywwLjgsMi4yLDMuNCw0LjcsM2MwLDguNywwLDE3LjMsMCwyNmMtMi4zLDAtNC42LDAtNi43LDBjLTAuMywwLjktMC41LDEuNC0wLjcsMmMtMC41LTAuNC0wLjgtMC43LTEuNC0xLjFjLTAuMiwxLjEtMC4zLDItMC40LDIuN2MtMC42LTAuNi0xLjMtMS4zLTEuOC0xLjhjLTMsMC4yLTUuNSwwLTcuOCwwLjVjLTUuMSwxLjItNy4xLDAuNS05LjUtNC4xYy0yLjcsMS01LjIsMS4xLTcuOSwwLjFjLTAuNy0wLjMtMS42LTAuNS0yLjMtMC4zYy0xLjUsMC41LTIuOCwxLjMtNC4yLDEuOWMtMC4zLDAuMS0wLjktMC4yLTEuNC0wLjNjMC40LTEuMiwwLjgtMi4zLDEuNS00LjRjLTMuNywyLjMtNi41LDMuOS05LjYsNS45Yy00LjctMC40LTguMy0zLjktMTIuOC02LjJjLTEuOCwwLTMuOCwwLTUuMywwYy0wLjgtMS4xLTEuNS0yLTIuNy0zLjZjMCwyLjEsMCwzLjIsMCw0LjNjLTMuOCwxLjYtNy42LDIuNC0xMC44LDIuM2MtMS4xLTEuMy0yLjMtMi43LTMuNi00LjNjLTEsMS44LTAuNCw0LjItMy40LDQuNWMtMi45LTEuMi02LjMtMi43LTkuOS00LjJjLTEuNiwyLTMuMiw0LTUsNi4zYy00LTEuNS04LDEuOC0xMi4xLDAuMmMtMC41LDAuMy0wLjksMC41LTEuMywwLjdjLTEuNC0xLTIuNy0xLjgtMy42LTIuNWMtMC45LTIuOC0xLjctNS4yLTIuNS03LjljLTEuMiwxLjItMiwyLTMsM2MwLDEuMywwLDIuOCwwLDQuMWMtNSwwLjUtOS43LDItMTQuNiwwLjljLTAuMi0wLjktMC4zLTEuOC0wLjYtM2MtMS4xLDAuNS0xLjksMC45LTIuNiwxLjNjLTEuNy0wLjYtMy4yLTEuMi00LjktMS44Yy0wLjUsMC45LTEuMSwxLjgtMS43LDIuOGMtMC40LTAuOS0wLjktMS44LTEuMi0yLjRjMC4yLTAuNywwLjMtMS4xLDAuNy0yLjFjLTIuNywxLjQtNC43LDIuNC02LjcsMy40Yy0xLjgtMy4zLTQuOC02LjEtNi4xLTUuNmMtMC40LDAuNC0wLjksMC45LTEuMywxLjVjMC4zLDAuNywwLjYsMS4zLDEuMSwyLjNjLTAuOC0wLjEtMS4zLTAuMS0xLjgtMC4xYy0wLjItMS4yLTAuMy0yLTAuNi0zLjVjLTEuNCwxLjEtMi4zLDEuOC0zLjMsMi41Yy0wLjMtMC44LTAuNS0xLjMtMC44LTIuMmMtMS4xLDEuNi0yLjEsMi45LTMuMSw0LjRjLTIuMy0wLjgtNC43LTAuOC01LjYtMy44Yy0wLjUtMS40LTIuMS0yLjMtMy4xLTMuNGMtMC44LDEuMS0xLjUsMi4xLTIuMiwzLjFjLTEuOS0wLjUtMy41LTAuOS01LjUtMS40YzAuNSwxLDAuNywxLjQsMSwyYy0wLjgsMC41LTEuNiwwLjktMi40LDEuM2MtMC40LTEtMC43LTEuNi0xLjEtMi40Yy0xLjUsMC44LTIuNywxLjQtMy44LDJjLTAuNywxLjYtMS4yLDMtMS44LDQuM2MtMS40LTEuOC0yLjYtMy4zLTMuOC00LjhjLTAuMS0wLjctMC4xLTEuNS0wLjItMi4xYy0xLjgsMC0zLjMsMC00LDBjLTMuMSwxLjktNS42LDMuNC04LjMsNWMtMC40LTAuOC0wLjctMS41LTEuMy0yLjZjLTEuNCwwLjctMi43LDEuNC00LjEsMi4xYy0wLjMtMC4yLTAuOS0wLjUtMS42LTFjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMi0xLTAuMy0xLjgtMC41LTMuMWMtMC41LDEuMS0wLjgsMS43LTEuNiwzLjNjMC0yLjIsMC0zLjUsMC00LjdjLTAuMywwLjItMC42LDAuMy0wLjgsMC41Yy0xLjEtMS4yLTIuMy0yLjMtMy42LTMuNmMtMy4zLDEuMi0yLjksNS40LTQuNyw3LjZjLTQuOSwwLjUtOS4zLDAuOS0xMy44LDEuNGMtMC4xLTEuMi0wLjItMi0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS41LDAuNy0yLjksMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjUtMC45LTIuNGMtNi43LDEtMTIuNSw0LjQtMTkuMSw2LjZjLTAuOS0xLjItMS45LTIuNC0yLjYtMy40Yy0yLjksMS45LTUuNSwyLjktOC43LDEuMmMtMC41LDAuOS0xLjEsMS45LTEuNiwyLjhjLTAuNywwLTEuMywwLTIuMiwwYy0wLjYtMC45LTEuMy0yLTEuOC0yLjhjLTIuMSwwLjMtNC4xLDAuNy01LjgsMC45Yy0wLjktMC45LTEuNS0xLjUtMi4xLTIuMWMtMS4zLDAuNi01LjgsMS4xLTYuOCwxLjJjLTIuNSwwLjItNC45LDAuNi04LjEsMWMtMC4yLDAuNC0wLjYsMS4zLTEsMmMtMi0wLjYtMy41LTEuMS01LjMtMS42Yy0wLjYsMC44LTEuMSwxLjYtMiwzYy0wLjctMi0xLjItMy4zLTEuNy00LjdjLTEsMS4xLTEuOSwyLjItMi40LDIuOGMtMS45LDAtMi45LDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjRjLTIsMC4zLTQuMSwwLTUuNiwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNS0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMC45LDAuOS0xLjksMS4zLTIuOWMtMC45LTAuNy0xLjYtMS4yLTIuOC0yLjFDNDMzLjgsNDMuOCw0MzIuNCw0Ni41LDQzMC45LDQ5LjJ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=);
		background-position: center;
		background-repeat: repeat-x;
		background-size: auto 0.5em;
		color: rgba(0, 0, 0, 0.5);
		text-decoration: none;
	}

	sup {
		box-sizing: border-box;
		color: #cc0000;
		font-family: "Rock Salt", cursive;
		margin-top: 0.25em !important;
		max-width: 100% !important;
		left: 0;
		position: absolute;
		text-align: center;
		width: 100%;
	}

	mark {
		background: linear-gradient(
			to bottom,
			rgba(222, 255, 0, 1) 0%,
			rgba(222, 255, 0, 0.75) 60%,
			rgba(222, 255, 0, 1) 100%
		);

		&.pink {
			background: linear-gradient(
				to bottom,
				rgba(255, 107, 203, 1) 0%,
				rgba(255, 107, 203, 0.75) 60%,
				rgba(255, 107, 203, 1) 100%
			);
		}

		&.blue {
			background: linear-gradient(
				to bottom,
				rgba(107, 179, 255, 1) 0%,
				rgba(107, 193, 255, 0.75) 60%,
				rgba(107, 193, 255, 1) 100%
			);
		}

		&.green {
			background: linear-gradient(
				to bottom,
				rgba(39, 229, 54, 1) 0%,
				rgba(39, 229, 54, 0.75) 60%,
				rgba(39, 229, 54, 1) 100%
			);
		}

		&.orange {
			background: linear-gradient(
				to bottom,
				rgba(255, 177, 34, 1) 0%,
				rgba(255, 177, 34, 0.75) 60%,
				rgba(255, 177, 34, 1) 100%
			);
		}
	}

	hr {
		background-color: #000000;
		border: 0;
		height: 2px;
		margin: 1em 0;
	}

	dl {
		border: solid 0 #cccccc;
		border-width: 0.0625em 0;
		break-inside: avoid-column;
		margin: 1em auto;
		padding: 1em 0;
	}
`;
