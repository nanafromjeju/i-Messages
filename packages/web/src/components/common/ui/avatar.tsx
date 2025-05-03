const Avatar = () => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src="https://github.com/shadcn.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
