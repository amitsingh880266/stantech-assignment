# Stantech Assignment

This is a Todo application built with React Native and Expo. It allows users to add, edit, delete, and mark tasks as completed.

## Folder Structure

```
/Users/amit-vs/dev/stantech-assignment
├── app
│   ├── (tabs)
│   │   ├── index.tsx
│   │   ├── edit-task.tsx
│   │   └── _layout.tsx
│   └── _layout.tsx
├── assets
│   ├── fonts
│   │   └── SpaceMono-Regular.ttf
│   └── images
│       ├── checked.png
│       ├── delete.png
│       └── edit.png
├── components
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── database
│   └── db.ts
├── hooks
│   └── useColorScheme.ts
├── services
│   └── todoService.ts
├── store
│   ├── index.ts
│   └── todoSlice.ts
├── styles
│   ├── addTaskStyles.ts
│   └── homeScreenStyles.ts
├── types
│   └── todo.ts
└── README.md
```

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- View a list of tasks

## Learn More

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the Community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
