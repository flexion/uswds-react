import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { Grid, Row, Col } from "components/Grid";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  pendingCount,
} from "./counterSlice";
import "./Counter.scss";

export function Counter() {
  const count = useSelector(selectCount);
  const pending = useSelector(pendingCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <Grid>
      <Row className="Counter__header">
        <Col>
          <Button
            aria-label="Increment value"
            variant="link"
            onClick={() => dispatch(increment())}
          >
            <Fa icon={"plus-circle"} />
          </Button>
          <h2 className="Counter__count">{count}</h2>
          <Button
            aria-label="Decrement value"
            variant="link"
            onClick={() => dispatch(decrement())}
          >
            <Fa icon={"minus-circle"} />
          </Button>
        </Col>
      </Row>
      <Row className="Counter__form">
        <Col size={12}>
          <input
            className="usa-input"
            aria-label="Set increment amount"
            value={incrementAmount}
            disabled={pending}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </Col>
      </Row>
      <Row gap={4}>
        <Col size={12} className="text-center">
          <div className="display-inline-block">
            <ul class="usa-button-group usa-button-group--segmented">
              <li class="usa-button-group__item">
                <Button
                  onClick={() =>
                    dispatch(incrementByAmount(Number(incrementAmount) || 0))
                  }
                >
                  Add Amount
                </Button>
              </li>
              <li class="usa-button-group__item">
                <Button
                  className
                  color="accent-warm"
                  disabled={pending}
                  onClick={() =>
                    dispatch(incrementAsync(Number(incrementAmount) || 0))
                  }
                >
                  {pending ? (
                    <span>
                      <Fa
                        className="display-inline-block position-absolute"
                        icon="spinner"
                        spin
                      />
                      <span className="margin-left-3 display-inline-block">
                        Pending...
                      </span>
                    </span>
                  ) : (
                    "Add Async"
                  )}
                </Button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
