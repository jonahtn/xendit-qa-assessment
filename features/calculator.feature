Feature: Test online calculator

	Scenario Outline: Test subtraction functionalities
		Given Open chrome browser and start application
		When I subtract <value1> by <value2>
		Then I should be able to see <expected> on screen
		Examples:
			| value1      | value2 | expected  |
			| 2           | 2      | 0         |
			| 2           | 5      | -3        |
			| 10          | -3     | 13        |
			| -100        | -3     | -97       |
			| 99999999999 | 11     | 999999988 |

	Scenario Outline: Test division functionalities
		Given Open chrome browser and start application
		When I divide <value1> by <value2>
		Then I should be able to see <expected> on screen
		Examples:
			| value1 | value2 | expected   |
			| 20     | 5      | 4          |
			| -890   | -5     | -178       |
			| -148   | 4      | -37        |
			| 1000   | -55    | -37        |
			| 1322   | 0      | Error      |
			| 0      | 167    | 0          |
			| 1726   | 19     | 90.8421053 |

	Scenario Outline: Test CE functionalities
		Given Open chrome browser and start application
		When I enter <value> and press CE button
		Then the screen should be cleared
		Examples:
			| value     |
			| 5         |
			| 10000     |
			| 999999999 |
			| 1271823   |