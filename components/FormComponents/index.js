import React from 'react'

const index = () => {
  return (
    {({
        errors,
        handleBlur,
        handleSubmit,
        handleChange,
        isSubmitting,
        touched,
        values,
      }) => (
        <Form
          onSubmit={handleSubmit}
          div
          className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12"
        >
          <label className="block text-black text-lg font-bold mb-1">
            Name
          </label>
          <Field
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none"
          />

          {errors.name && (
            <div className="text-red text-center  mb-2">
              {errors.name}
            </div>
          )}

          <label className="block text-black text-lg font-bold mb-1">
            Email
          </label>
          <Field
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
          />

          {errors.name && touched.name ? (
            <div className="text-red text-center  mb-2 ">
              {errors.email}
            </div>
          ) : null}

          <label className="block text-black text-lg font-bold mb-1">
            Phone Number
          </label>
          <Field
            type="phone"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
          />

          {errors.phone && touched.phone ? (
            <div className="text-red text-center  mb-2">
              {errors.phone}
            </div>
          ) : null}

          <div className="flex  justify-between items-center">
            <label className="block text-black text-lg font-bold mb-1">
              Adults
            </label>
            <Field as="select" name="adults">
              {adultOptions?.map((option) => {
                return (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.key}
                  </option>
                );
              })}
              {/* <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option> */}
              className="mb-6 border-[f0f0f0] w-full
              rounded border py-6 px-[px-20] text-base
              text-black outline-none
              focus:border-primary
              focus-visible:shadow-none"
            </Field>
            {errors.adults && touched.adults ? (
              <div className="text-red text-center  mb-2">
                {errors.adults}
              </div>
            ) : null}

            <label className="block text-black text-lg font-bold mb-1">
              Children
            </label>

            <Field as="select" name="children">
              {/* <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option> */}
              {childrenOptions?.map((option) => {
                return (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.key}
                  </option>
                );
              })}
              className="mb-6 border-[f0f0f0] w-full
              rounded border py-3 px-[14px] text-base
              text-black outline-none
              focus:border-primary
              focus-visible:shadow-none"
            </Field>
            {errors.children && touched.children ? (
              <div className="text-red text-center  mb-2">
                {errors.children}
              </div>
            ) : null}

            <label className="block text-black text-lg font-bold mb-1">
              Room Type
            </label>

            <Field as="select" name="roomType">
              {/* <option value="1 Bed ">1 Bed </option>
              <option value="2 Bed ">2 Bed </option>
              <option value="3 Bed ">3 Bed </option> */}
              {roomTypeOptions?.map((option) => {
                return (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.key}
                  </option>
                );
              })}
              className="mb-6 border-[f0f0f0] w-full
              rounded border py-3 px-[14px] text-base
              text-black outline-none
              focus:border-primary
              focus-visible:shadow-none"
            </Field>
            {errors.roomType && touched.roomType ? (
              <div className="text-red text-center  mb-2">
                {errors.roomType}
              </div>
            ) : null}
          </div>

          <div className="my-12 w-full">
            <label className="block text-black text-sm font-bold mb-1">
              Check In Date
            </label>
            <Field name="bookingDate">
              {({ form, field }) => {
                const { setFieldValue } = form;
                const { value } = field;
                return (
                  <DatePicker
                    showIcon
                    {...field}
                    name="bookingDate"
                    selected={values.bookingDate}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "26px",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    calendarPosition="bottom-center"
                    onChange={(val) =>
                      setFieldValue(val)
                    }
                  />
                );
              }}
            </Field>
            {/* <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                height: "26px",
              }}
              containerStyle={{
                width: "100%",
              }}
              calendarPosition="bottom-center"
            /> */}
          </div>

          <label className="block text-black text-sm font-bold mb-1">
            No. of Nights
          </label>

          <Field
            type="nights"
            placeholder="No. of Nights"
            name="nights"
            value={values.nights}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
          />

          {errors.nights && touched.nights ? (
            <div className="text-red text-center  mb-2">
              {errors.nights}
            </div>
          ) : null}

          <label className="block text-black text-sm font-bold mb-1">
            Message
          </label>
          <Field
            as="textarea"
            type="message"
            row="6"
            placeholder="Your Message"
            name="details"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mb-6 border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
          />

          {errors.message && touched.message ? (
            <div className="text-red text-center  mb-2">
              {errors.message}
            </div>
          ) : null}

          <div className="flex items-center space-x-4 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-[#041413] background-transparent font-bold uppercase px-8 py-6 text-xl outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className={clsx(
                "w-1/2 p-3 text-black transition border rounded border-primary  hover:bg-opacity-90",
                theme === "dark"
                  ? "bg-[#041434] text-white"
                  : "bg-[#F3F4F6] text-black"
              )}
              type="submit"
              onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
  )
}

export default index