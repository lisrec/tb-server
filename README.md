# Team Budget

## CQRS flow

* Change state
  * Controller
  * Service (send command)
  * Aggregate::commandHandler (dispatch events)
  * Optional saga event handling
  * Projections building state from events
* Read state
  * Controller
  * Service (send query)
  * Projection response for query
