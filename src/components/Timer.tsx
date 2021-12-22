/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx } from '@emotion/react'
import { ElapsedTime } from "./ElapsedTime";

export const Timer = ({ record, startTime }) => {
  const [data, setData] = useState<Aha.Feature>(null)

  const loadRecord = async () => {
    const data = await aha.models.Feature.select('id', 'name', 'referenceNum').find(record)
    setData(data)
  }

  useEffect(() => {
    loadRecord()
  }, []);

  if (!data) {
    return <aha-spinner />
  }

  return (
    <div className="card card--unstyled" css={css`
      background-color: var(--theme-primary-background);
      box-shadow: var(--theme-shadow-deep);
    `}>
      <div className="card__body-wrapper">
        <div className="card__body">
          <div className="card__row">
            <div className="card__section" css={css`
              flex-wrap: nowrap;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            `}>
              <div className="card__field">
                {data.referenceNum}
              </div>
              <div className="card__field">
                <a>{data.name}</a>
              </div>
            </div>
            <div className="card__section">
            </div>
          </div>
          <div className="card__row">
            <div className="card__section">
              <div className="card__field">
                <h4><ElapsedTime startTime={startTime} /></h4>
              </div>
            </div>
            <div className="card__section">
              <div className="card__field">
                <button onClick={e => stopTimer(data)}>Stop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}