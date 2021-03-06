
# 4Fs of Weight Loss Portal

Helps members track their progress through various aspects of the 4Fs of Weight Loss program.


## Tech Stack

**Client:** React, Context API, Styled Components, Semantic UI, Sentry

**[Server](https://github.com/bumblybee/4Fs_server):** Node, Express

**Database:** PostgreSQL

## Code Examples

The majority of the application relies on this reusable table component that accepts rows, columns, and props
> [Table Component](https://github.com/bumblybee/4Fs_Client/blob/master/src/components/table/TableComponent.js)

Utility to generate cell components - pass type of cell as first argument and props object as second
> [Generate Cell Component](https://github.com/bumblybee/4Fs_Client/blob/1aee4a9ea24baaf97153a07585aa2c36d995ae14/src/utils/generateCellComponent.js#L16-L194)

Reusable hook to handle API calls - significantly cut development time
> [useCRUD Hook](https://github.com/bumblybee/4Fs_Client/blob/master/src/hooks/useCRUD.js)

Table, Generate Cell, and API hook in use
> [Milestones Component](https://github.com/bumblybee/4Fs_Client/blob/61fc12a33e70a192af5d59c4c2b58e290bdfe1d6/src/components/home/milestones/Milestones.js#L13-L112)

Component checks for user auth to protect private routes
> [Protected Route](https://github.com/bumblybee/4Fs_Client/blob/master/src/components/protectedRoute/ProtectedRoute.js)

Custom Error Handling
> [Error Handler](https://github.com/bumblybee/4Fs_Client/blob/master/src/handlers/errorHandler.js)

Dynamically Render Notifications
> [Notification Context Provider](https://github.com/bumblybee/4Fs_Client/blob/master/src/context/notification/NotificationProvider.js),
[Notification Component](https://github.com/bumblybee/4Fs_Client/blob/master/src/components/notification/Notification.js)

  
## Screenshots

Rough Prototype
![SleepMock](https://user-images.githubusercontent.com/47286930/131864581-231db803-1dc5-45eb-a1a8-90c223542eb7.png)

Translated Prototype
![SleepScreenshot](https://user-images.githubusercontent.com/47286930/131861388-491d514d-dba6-48ee-a334-8aacbf025f70.png)

  
## Demo

https://app.4fsofweightloss.com/

  


  
